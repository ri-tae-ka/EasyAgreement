import React, { Fragment, useEffect } from "react";
import "./Summaries.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllSummaries } from "../../actions/summaryActions";

const Summaries = () => {
  const dispatch = useDispatch();

  const { loading, error, summaries } = useSelector((state) => state.summaries);

  useEffect(() => {
    dispatch(getAllSummaries());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="documents-page">
        <h1 className="title">Your Documents</h1>
        <div className="allSummaries">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : summaries && summaries.length > 0 ? (
            <div>
              {summaries
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((summary) => (
                  <div className="single" key={summary._id}>
                    <Link to={`/summary/${summary._id}`}>
                      {new Intl.DateTimeFormat("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                        .format(new Date(summary.createdAt))
                        .toLowerCase()}
                      <h3>{summary.name}</h3>
                    </Link>
                  </div>
                ))}
            </div>
          ) : (
            <p className="center-items">No data found.</p>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Summaries;
