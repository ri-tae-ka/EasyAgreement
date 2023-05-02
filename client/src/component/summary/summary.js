import React, { Fragment, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSummary, clearErrors } from "../../actions/summaryActions";
import { CREATE_SUMMARY_RESET } from "../../constants/summaryConstants";

const Summary = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const inputFileRef = useRef(null);
  const resultTextRef = useRef(null);

  const { loading, error, success } = useSelector((state) => state.newSummary);

  const [date, setDate] = useState(new Date());
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

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

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("pdfFile", inputFileRef.current.files[0]);

    fetch("/extract-text", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((extractedText) => {
        resultTextRef.current.value = extractedText;
        setInputValue(extractedText);
        console.log(extractedText);
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
          <input type="file" ref={inputFileRef} accept="application/pdf" />
          <button type="button" onClick={handleUpload}>
            Upload
          </button>
          <textarea
            ref={resultTextRef}
            placeholder="Your pdf text will appear here"
            style={{ height: "200px", width: "500px" }}
            readOnly
            id="input"
            value={inputValue}
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
