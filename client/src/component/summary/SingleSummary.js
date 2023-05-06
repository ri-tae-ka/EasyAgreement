import React, { Fragment, useEffect, useState } from "react";
import "./SingleSummary.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleSummary } from "../../actions/summaryActions";
import Menu from "../accessibility/menu";

const SingleSummary = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, error, summary } = useSelector(
    (state) => state.singleSummary
  );

  const { isAuthenticated } = useSelector((state) => state.user);

  const [fontSize, setFontSize] = useState(16);
  const [readAloud, setReadAloud] = useState(false);

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

  return (
    <Fragment>
      <Menu
        fontSize={fontSize}
        readAloud={readAloud}
        onFontSizeChange={setFontSize}
        onReadAloudChange={setReadAloud}
        description={summary.description}
        summary={summary.summary}
      />
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
                <p>{summary.summary}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default SingleSummary;
