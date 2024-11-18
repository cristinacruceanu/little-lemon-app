import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ReservationForm from "./ReservationForm";
import { MemoryRouter } from "react-router-dom";
import { ReservationContext } from "../../context/ReservationContext";
import { fetchAPI } from "../../api";
import FormField from "../FormField";
import { getTodayDate } from "../../utils/Utils";

beforeEach(() => {
  jest.clearAllMocks();
  jest.useRealTimers();
});

afterEach(() => {
  jest.clearAllTimers();
  jest.resetAllMocks();
});

afterAll(() => {
  jest.resetAllMocks();
});

/*describe("label unit test", () => {
  test("renders the ReservationForm date label", () => {
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
    const dateLabel = screen.getByLabelText("Date");
    expect(dateLabel).toBeInTheDocument();
  });
});
*/

describe("seating label unit test", () => {

  test("renders the ReservationForm seating label", () => {
    render(
      <FormField
        label="Seating Options:"
        name="seating"
        type="radio"
        options={[
          { value: "Standard", label: "Standard" },
          { value: "Outside", label: "Outside" },
        ]}
        value="Standard"
        onChange={jest.fn()}
      />,
    );

    const standardRadio = screen.getByLabelText("Standard");
    const outsideRadio = screen.getByLabelText("Outside");

    expect(standardRadio).toBeInTheDocument();
    expect(outsideRadio).toBeInTheDocument();
  });
});

jest.mock("../../api", () => ({
  fetchAPI: jest.fn(),
}));

describe("update times function test", () => {

  const mockTimes = ["11:00 AM", "1:00 PM", "3:00 PM"];

  beforeEach(() => {
    fetchAPI.mockResolvedValue(mockTimes);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
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

describe("validate ReservationForm input attributes", () => {
 

  const mockContextValue = {
    availableTimes: ["12:00 PM", "1:00 PM", "2:00"],
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


  test("renders input fields with correct attributes", () => {
    render(
      <ReservationContext.Provider value={mockContextValue}>
        <MemoryRouter>
          <ReservationForm />
        </MemoryRouter>
      </ReservationContext.Provider>,
    );

    const dateInput = screen.getByLabelText("Date");
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("min", getTodayDate());
    expect(dateInput).toBeRequired();

    const timeInput = screen.getByLabelText("Time");
    expect(timeInput.tagName).toBe("SELECT");
    expect(timeInput).toHaveAttribute("name", "time");
    expect(timeInput).toBeRequired();
    mockContextValue.availableTimes.forEach((time) => {
      const option = screen.getByRole("option", { name: time });
      expect(option).toBeInTheDocument();
      expect(option).toHaveValue(time);
    });

    const dinersInput = screen.getByLabelText("Number of Diners");
    expect(dinersInput).toHaveAttribute("type", "number");
    expect(dinersInput).toHaveAttribute("min", "1");
    expect(dinersInput).toBeRequired();

    const occasionInput = screen.getByLabelText("Occasion");
    expect(occasionInput).toHaveAttribute("type", "text");
    expect(occasionInput).toHaveAttribute("type", "text");
    expect(occasionInput).toBeRequired();

    const standardRadio = screen.getByLabelText("Standard");
    const outsideRadio = screen.getByLabelText("Outside");
    expect(standardRadio).toHaveAttribute("type", "radio");
    expect(outsideRadio).toHaveAttribute("type", "radio");
  });
});
