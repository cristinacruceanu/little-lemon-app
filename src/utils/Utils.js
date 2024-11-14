import { fetchAPI } from "../api";

export const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

export const initializeTimes = async () => {
  const availableTimes = await fetchAPI(getTodayDate());

  return {
    availableTimes,
    formData: {
      date: getTodayDate(),
      time: "",
      diners: "",
      occasion: "",
      seating: "",
    },
  };
};

export const reservationReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state, availableTimes: action.payload };
    case "SET_DATE":
      return {
        ...state,
        formData: { ...state.formData, date: action.payload },
      };
    case "SET_FORM_DATA":
      return { ...state, formData: { ...state.formData, ...action.payload } };
    default:
      return state;
  }
};
