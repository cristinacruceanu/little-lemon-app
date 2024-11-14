import React, { createContext, useReducer, useEffect, useState } from "react";
import { initializeTimes, reservationReducer } from "../utils/Utils";
import {fetchAPI, submitAPI} from "../api";


export const ReservationContext = createContext();

const initialState = {
  availableTimes: [],
  formData: {
    date: "",
    time: "",
    diners: "",
    occasion: "",
    seating: "",
  },
};

export const ReservationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reservationReducer, initialState);
  const [loading, setLoading] = useState(true);

  useEffect (()=>{
    const fetchInitialTimes = async()=> {
      setLoading(true);
   const initialData = await initializeTimes();
   dispatch({type: "UPDATE_TIMES", payload: initialData.availableTimes});
   dispatch({type:"SET_FORM_DATA", payload: initialData.formData});
   setLoading(false);
    };
    fetchInitialTimes();
  },[]);

  const updateTimes = async (selectedDate) => {
    const dateObject = typeof selectedDate === "string" ? new Date(selectedDate): selectedDate;
    const times = await fetchAPI(dateObject);
    dispatch({ type: "UPDATE_TIMES", payload: times});
  };

  const setDate = (date) => {
    dispatch({ type: "SET_DATE", payload: date });
    updateTimes(date);
  };

  const setFormData = (data) => {
    dispatch({ type: "SET_FORM_DATA", payload: data });
  };

  const submitReservation = async(formData) => {
    const isSubmitted = await submitAPI(formData)
    return isSubmitted;
  };
  return (
    <ReservationContext.Provider
      value={{
        availableTimes: state.availableTimes,
        formData: state.formData,
        loading,
        updateTimes,
        setDate,
        setFormData,
        submitReservation,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};
