import axios from "axios";
import {
  CREATE_SUMMARY_REQUEST,
  CREATE_SUMMARY_SUCCESS,
  CREATE_SUMMARY_RESET,
  CREATE_SUMMARY_FAIl,
  ALL_SUMMARY_REQUEST,
  ALL_SUMMARY_SUCCESS,
  ALL_SUMMARY_FAIL,
  CLEAR_ERRORS,
} from "../constants/summaryConstants";

export const createSummary = (newSummary) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_SUMMARY_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      "/api/v1//summary/new",
      newSummary,
      config
    );

    dispatch({
      type: CREATE_SUMMARY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_SUMMARY_FAIl,
      payload: error.response.data.message,
    });
  }
};

export const getAllSummaries = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_SUMMARY_REQUEST,
    });
    const { data } = await axios.get("/api/v1/summaries");
    dispatch({
      type: ALL_SUMMARY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_SUMMARY_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
