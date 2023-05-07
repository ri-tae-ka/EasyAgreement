import React, { Fragment, useEffect, useState } from "react";
import "./SingleSummary.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleSummary } from "../../actions/summaryActions";
import Menu from "../accessibility/menu";
import axios from "axios";
import iso6391 from "iso-639-1";

const SingleSummary = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, error, summary } = useSelector(
    (state) => state.singleSummary
  );

  const { isAuthenticated } = useSelector((state) => state.user);

  const [fontSize, setFontSize] = useState(16);
  const [readAloud, setReadAloud] = useState(false);
  const [translatedText, setTranslatedText] = useState(null);

  useEffect(() => {
    dispatch(getSingleSummary(id));

    if (isAuthenticated === "false") {
      window.location = "/";
    }
  }, [dispatch, id]);

  const date = new Date(summary.createdAt);
  const formattedDate = date.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleTranslateClick = async () => {
    const targetLanguage = prompt("Enter the target language:");
    const targetLanguageCode = iso6391.getCode(targetLanguage);

    if (targetLanguageCode) {
      console.log(`Target language code: ${targetLanguageCode}`);
    } else {
      window.alert("Invalid Language Entered! Please try again:)");
    }

    const options = {
      method: "POST",
      url: "https://text-translator2.p.rapidapi.com/translate",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": process.env.REACT_APP_TRANSLATE_KEY,
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      data: {
        source_language: "en",
        target_language: targetLanguageCode,
        text: summary.summary,
      },
    };

    try {
      const response = await axios.request(options);
      setTranslatedText(response.data.data.translatedText);
    } catch (error) {
      window.alert(error);
    }
  };

  return (
    <Fragment>
      <div className="menu">
        <Menu
          fontSize={fontSize}
          readAloud={readAloud}
          onFontSizeChange={setFontSize}
          onReadAloudChange={setReadAloud}
          description={summary.description}
          summary={summary.summary}
          onTranslateClick={handleTranslateClick}
          translatedText={translatedText}
        />
      </div>
      <div className="single-summary-page">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="summary-header">
            <div className="summary-topic">
              <h3 className="summary-name">{summary.name}</h3>
              <p className="summary-date">{formattedDate}</p>
            </div>
            <div className="summary-detail">
              <h4>Description</h4>
              <div className="summary-body" style={{ fontSize }}>
                <p>{summary.description}</p>
              </div>
              <h4>Summary</h4>
              <div className="summary-body" style={{ fontSize }}>
                <p>{translatedText || summary.summary}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default SingleSummary;
