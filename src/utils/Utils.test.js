import { initializeTimes } from "./Utils";

test("initializeTimes should return the correct expected values", () => {
  const result = initializeTimes();
  expect(result).toEqual({
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
      date: "",
      time: "",
      diners: "",
      occasion: "",
      seating: "",
    },
  });
});
