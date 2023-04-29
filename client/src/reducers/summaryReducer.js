import {
  CLEAR_ERRORS,
  CREATE_SUMMARY_FAIl,
  CREATE_SUMMARY_REQUEST,
  CREATE_SUMMARY_RESET,
  CREATE_SUMMARY_SUCCESS,
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
