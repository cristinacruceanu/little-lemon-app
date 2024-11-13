export const initializeTimes = () => ({
  availableTimes: [
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
  ],
  formData: {
    date:"",
    time:"",
    diners:"",
    occasion:"",
    seating:"",
  }
});

export const reservationReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return {...state, availableTimes:["11:00 AM", "1:00 PM", "3:00 PM"]};
      case "SET_DATE":
      return {...state, formData: {...state.formData, date: action.payload}};
      case "SET_FORM_DATA":
        return {...state, formData:{...state.formData,...action.payload}};
    default:
      return state;
  }
};
