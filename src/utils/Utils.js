export const initializeTimes = () => {
  return [
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
  ];
};
export const updateTimes = (state, action) => {
  const { type, date } = action;
  switch (type) {
    case "UPDATE_TIMES":
      return initializeTimes();
    default:
      return state;
  }
};
