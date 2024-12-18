import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ReservationForm from "../components/Reservation/ReservationForm";
import { MemoryRouter } from "react-router-dom";
import { ReservationContext } from "../context/ReservationContext";
import { fetchAPI } from "../api";

jest.mock("../api", () => ({
  fetchAPI: jest.fn(),
}));

describe("update times function test", () => {
  const mockTimes = ["11:00 AM", "1:00 PM", "3:00 PM"];

  beforeEach(() => {
    fetchAPI.mockResolvedValue(mockTimes); // Mock resolved value
  });

  afterEach(() => {
    jest.clearAllMocks(); // Reset mocks after each test
  });

  test("updates available times based on the selected date", async () => {
    const updateTimes = jest.fn(async (date) => {
      const times = await fetchAPI(date);
      return times;
    });
    const setDate = jest.fn((date) => {
      updateTimes(date);
    });

    render(
      <ReservationContext.Provider
        value={{
          availableTimes: [],
          formData: { date: "" },
          updateTimes,
          setDate,
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
      target: { value: "2024-11-17" },
    });

    await waitFor(() => {
      expect(setDate).toHaveBeenCalledWith("2024-11-17");
    });

    await waitFor(() => {
      expect(updateTimes).toHaveBeenCalledWith("2024-11-17");
    });

    expect(fetchAPI).toHaveBeenCalledWith("2024-11-17");
    const resolvedTimes = await fetchAPI.mock.results[0].value;
    expect(resolvedTimes).toEqual(mockTimes);
  });
});
