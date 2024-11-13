import { render, screen, fireEvent } from "@testing-library/react";
import ReservationForm from "./ReservationForm";
import { MemoryRouter } from "react-router-dom";
import { ReservationContext } from "../../context/ReservationContext";

describe("label unit test", () => {
  test("renders the ReservationForm seating label", () => {
    const mockAvailableTimes = [
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

    const mockFormData = {
      date: "2024-11-13",
      time: "12:00",
      diners: 2,
      occasion: "Birthday",
      seating: "Standard",
    };

    render(
      <ReservationContext.Provider
        value={{
          availableTimes: mockAvailableTimes,
          formData: mockFormData,
        }}
      >
        <MemoryRouter>
          <ReservationForm />
        </MemoryRouter>
      </ReservationContext.Provider>,
    );
    const seatingLabel = screen.getByLabelText("Seating Options:");
    expect(seatingLabel).toBeInTheDocument();
  });
});

describe("update times function test", () => {
  test("updates available times based on the selected date", () => {
    const updateTimes = jest.fn(() => mockTimes);
    const mockTimes = ["11:00 AM", "1:00 PM", "3:00 PM"];
    render(
      <ReservationContext.Provider
        value={{
          availableTimes: mockTimes,
          formData: { date: "" },
          updateTimes,
          setDate: jest.fn(),
          setFormData: jest.fn(),
        }}
      >
        <MemoryRouter>
          <ReservationForm />
        </MemoryRouter>
      </ReservationContext.Provider>,
    );

    const dateInput = screen.getByLabelText("Date");
    fireEvent.change(dateInput, {
      target: { value: "2024-11-13" },
    });
    expect(updateTimes).toHaveBeenCalledWith("2024-11-13");
    expect(updateTimes).toHaveReturnedWith(mockTimes);
  });
});
