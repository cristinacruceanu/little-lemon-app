import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ReservationForm from "../components/Reservation/ReservationForm";
import { MemoryRouter } from "react-router-dom";
import { ReservationContext } from "./ReservationContext";
import { submitAPI } from "../api";

jest.mock("../api", () => ({
  submitAPI: jest.fn(),
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("submitReservation function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, "error").mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const mockContextValue = {
    availableTimes: ["12:00 PM", "1:00 PM"],
    formData: {
      date: "2024-11-17",
      time: "12:00 PM",
      diners: 2,
      occasion: "Birthday",
      seating: "Standard",
    },
    setDate: jest.fn(),
    setFormData: jest.fn(),
    submitReservation: async (formData) => await submitAPI(formData),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("submits form successfully and navigates to the login page", async () => {
    submitAPI.mockResolvedValue(true);

    render(
      <ReservationContext.Provider value={mockContextValue}>
        <MemoryRouter>
          <ReservationForm />
        </MemoryRouter>
      </ReservationContext.Provider>,
    );

    const button = screen.getByTestId("next-button");
    fireEvent.click(button);

    await waitFor(() => {
      expect(submitAPI).toHaveBeenCalledWith(mockContextValue.formData);
    });

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/login-page");
    });
  });

  test("handles form submission failure", async () => {
    submitAPI.mockResolvedValue(false); // Simulate failed API call

    render(
      <ReservationContext.Provider value={mockContextValue}>
        <MemoryRouter>
          <ReservationForm />
        </MemoryRouter>
      </ReservationContext.Provider>,
    );

    const button = screen.getByTestId("next-button");
    fireEvent.click(button);

    await waitFor(() => {
      expect(submitAPI).toHaveBeenCalledWith(mockContextValue.formData);
    });

    await waitFor(() => {
      expect(mockNavigate).not.toHaveBeenCalled();
    });

    expect(console.error).toHaveBeenCalledWith(
      "Booking data saving failed. Please try again.",
    );
  });
});
