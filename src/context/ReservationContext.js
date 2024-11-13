import React, { createContext, useReducer } from "react";
import { initializeTimes, reservationReducer } from "../utils/Utils";

export const ReservationContext = createContext();
export const ReservationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reservationReducer, {}, initializeTimes);

  const updateTimes = (selectedDate) => {
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
  };
  const setDate = (date) => {
    dispatch({ type: "SET_DATE", payload: date });
  };
  const setFormData = (data) => {
    dispatch({ type: "SET_FORM_DATA", payload: data });
  };

  return (
    <ReservationContext.Provider
      value={{
        availableTimes: state.availableTimes,
        formData: state.formData,
        updateTimes,
        setDate,
        setFormData,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};
