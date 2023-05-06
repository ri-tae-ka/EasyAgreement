import React, { Fragment, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSummary, clearErrors } from "../../actions/summaryActions";
import { CREATE_SUMMARY_RESET } from "../../constants/summaryConstants";
import axios from "axios";
import "./Summary.css";

const Summary = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const [inputFile, setInputFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");

  const inputFileRef = useRef(null);
  const resultTextRef = useRef(null);

  const { loading, error, success } = useSelector((state) => state.newSummary);

  const [date, setDate] = useState(new Date());
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const isInputEmpty = inputValue?.trim() === "";

  useEffect(() => {
    if (error) {
      window.alert(error);
      dispatch(clearErrors);
    }
    if (success) {
      window.alert("We added your document!");
      window.location = "/summaries";
      setTimeout(function () {
        window.location = "/summaries";
      }, 1000);
      dispatch({ type: CREATE_SUMMARY_RESET });
    }
  }, [dispatch, error, success]);

  const API_HOST = "https://api.meaningcloud.com/summarization-1.0";

  async function condense(text) {
    try {
      const qs = require("qs");

      const requestBody = qs.stringify({
        key: process.env.REACT_APP_MEANINGCLOUD_API,
        txt: text,
        sentences: 100,
      });

      const response = await axios.post(API_HOST, requestBody, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const summary = response.data.summary.replace(/\s+/g, " ");
      return summary;
    } catch (error) {
      window.alert(error);
      return null;
    }
  }

  async function generateSummary(extractText) {
    const options = {
      method: "POST",
      url: "https://gpt-summarization.p.rapidapi.com/summarize",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.REACT_APP_GPT_API,
        "X-RapidAPI-Host": "gpt-summarization.p.rapidapi.com",
      },
      data: {
        text: await condense(extractText),
        num_sentences: 5,
      },
    };

    try {
      const response = await axios.request(options);
      const summarizedText = response.data.summary;
      return summarizedText;
    } catch (error) {
      window.alert(error);
      return null;
    }
  }

  const handleInputFile = (event) => {
    const file = event.target.files[0];
    setInputFile(file);
    setSelectedFileName(file.name);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("pdfFile", inputFileRef.current.files[0]);

    fetch("/extract-text", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then(async (extractedText) => {
        const summarizedText = await generateSummary(extractedText);
        setInputValue(summarizedText);
        resultTextRef.current.value = summarizedText;
      });
  };

  const handleSubmit = async (e) => {
    const description = window.prompt("Please enter Description.");
    const name = window.prompt("Please enter name.");
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("description", description);
    myForm.set("name", name);
    myForm.set("summary", inputValue);

    try {
      await dispatch(createSummary(myForm));
      window.alert("New Document Saved!");
      window.location = "/summaries";
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <Fragment>
      <form>
        <section className="create-summary">
          <div className="left-upload-section create-summary-left">
            <input
              type="file"
              ref={inputFileRef}
              accept="application/pdf"
              onChange={handleInputFile}
            />
            <br />
            {selectedFileName && (
              <div className="file-name">{selectedFileName}</div>
            )}
            <button type="button" onClick={handleUpload} className="uploadBtn">
              Generate Summary
            </button>
          </div>
          <div className="right-summary-section create-summary-left">
            <h3 className="summary-date">
              {date.toLocaleDateString("en-US", options).toLowerCase()}
            </h3>
            <textarea
              ref={resultTextRef}
              placeholder="Your summarized text will appear here..."
              style={{ height: "200px", width: "500px" }}
              readOnly
              id="input"
              value={inputValue}
            />
            <button
              className="summary-save-button"
              disabled={isInputEmpty}
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </section>
      </form>
    </Fragment>
  );
};

export default Summary;
