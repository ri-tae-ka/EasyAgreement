import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSummary, clearErrors } from "../../actions/summaryActions";
import { CREATE_SUMMARY_RESET } from "../../constants/summaryConstants";

const Summary = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const { loading, error, success } = useSelector((state) => state.newSummary);

  const [date, setDate] = useState(new Date());
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  const isInputEmpty = inputValue.trim() === "";

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
      window.location = "/summary";
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <Fragment>
      <form>
        <h3>{date.toLocaleDateString("en-US", options).toLowerCase()}</h3>
        <section>
          <textarea
            id="input"
            value={inputValue}
            onChange={handleInputChange}
          />
        </section>
        <button
          className="save-button"
          disabled={isInputEmpty}
          onClick={handleSubmit}
        >
          Save
        </button>
      </form>
    </Fragment>
  );
};

export default Summary;
