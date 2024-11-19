import { render, screen, cleanup } from "@testing-library/react";
import ReservationForm from "../components/Reservation/ReservationForm";
import { MemoryRouter } from "react-router-dom";
import { ReservationContext } from "../context/ReservationContext";

describe("isFormValid", () => {
  const mockContextValue = {
    availableTimes: ["12:00 PM", "1:00 PM", "2:00 PM"],
    formData: {
      date: "",
      time: "",
      diners: "",
      occasion: "",
      seating: "",
    },
    setDate: jest.fn(),
    setFormData: jest.fn(),
    loading: false,
    submitReservation: jest.fn(),
  };

  const setup = (contextValue) => {
    render(
      <ReservationContext.Provider value={contextValue}>
        <MemoryRouter>
          <ReservationForm />
        </MemoryRouter>
      </ReservationContext.Provider>,
    );
  };

  test("should return true when all form fields are valid", () => {
    const validFormData = {
      date: "2024-11-17",
      time: "12:00 PM",
      diners: 2,
      occasion: "Birthday",
      seating: "Standard",
    };

    const contextValue = {
      ...mockContextValue,
      formData: validFormData,
    };

    setup(contextValue);

    const button = screen.getByTestId("next-button");
    expect(button).not.toBeDisabled();
  });

  test("should return false when any form field is missing", () => {
    const invalidFormDataSets = [
      {
        date: "",
        time: "12:00 PM",
        diners: 2,
        occasion: "Birthday",
        seating: "Standard",
      },
      {
        date: "2024-11-17",
        time: "",
        diners: 2,
        occasion: "Birthday",
        seating: "Standard",
      },
      {
        date: "2024-11-17",
        time: "12:00 PM",
        diners: "",
        occasion: "Birthday",
        seating: "Standard",
      },
      {
        date: "2024-11-17",
        time: "12:00 PM",
        diners: 2,
        occasion: "",
        seating: "Standard",
      },
      {
        date: "2024-11-17",
        time: "12:00 PM",
        diners: 2,
        occasion: "Birthday",
        seating: "",
      },
    ];

    invalidFormDataSets.forEach((formData) => {
      const contextValue = {
        ...mockContextValue,
        formData,
      };

      setup(contextValue);

      const button = screen.getByTestId("next-button");
      expect(button).toBeDisabled();
      cleanup();

      /* Another posibility to avoid duplication of the button in the DOM
  test.each([
  { date: "", time: "12:00 PM", diners: 2, occasion: "Birthday", seating: "Standard" },
  { date: "2024-11-17", time: "", diners: 2, occasion: "Birthday", seating: "Standard" },
  { date: "2024-11-17", time: "12:00 PM", diners: "", occasion: "Birthday", seating: "Standard" },
  { date: "2024-11-17", time: "12:00 PM", diners: 2, occasion: "", seating: "Standard" },
  { date: "2024-11-17", time: "12:00 PM", diners: 2, occasion: "Birthday", seating: "" },
])("button is disabled when formData is invalid: %p", (formData) => {
  const contextValue = {
    ...mockContextValue,
    formData,
  };

  setup(contextValue);

  const button = screen.getByTestId("next-button");
  expect(button).toBeDisabled();

  cleanup();*/
    });
  });
});
