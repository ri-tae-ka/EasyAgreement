import React, { Fragment, useEffect } from "react";
import "./SingleSummary.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleSummary } from "../../actions/summaryActions";

const SingleSummary = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, error, summary } = useSelector(
    (state) => state.singleSummary
  );

  useEffect(() => {
    dispatch(getSingleSummary(id));
  }, [dispatch, id]);

  const date = new Date(summary.createdAt);
  const formattedDate = date.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Fragment>
      <div className="single-summary-page">
        <div className="summary-header">
          <div className="design-topic">
            <h3 className="summary-name">{summary.name}</h3>
            <p className="summary-date">{formattedDate}</p>
          </div>
          <div className="summary-body">
            <p>{summary.description}</p>
          </div>
          <div className="summary-body">
            <p>{summary.summary}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SingleSummary;
