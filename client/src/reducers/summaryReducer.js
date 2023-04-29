import {
  ALL_SUMMARY_SUCCESS,
  ALL_SUMMARY_REQUEST,
  ALL_SUMMARY_FAIL,
  CREATE_SUMMARY_FAIl,
  CREATE_SUMMARY_REQUEST,
  CREATE_SUMMARY_RESET,
  CREATE_SUMMARY_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/summaryConstants";

export const createSummaryReducer = (state = { newSummary: {} }, action) => {
  switch (action.type) {
    case CREATE_SUMMARY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_SUMMARY_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        newSummary: action.payload,
      };

    case CREATE_SUMMARY_RESET:
      return {
        ...state,
        success: false,
      };

    case CREATE_SUMMARY_FAIl:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const summaryReducer = (state = { summaries: [] }, action) => {
  switch (action.type) {
    case ALL_SUMMARY_REQUEST:
      return {
        loading: true,
        summaries: [],
      };
    case ALL_SUMMARY_SUCCESS:
      return {
        loading: false,
        summaries: action.payload.summaries,
      };
    case ALL_SUMMARY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
