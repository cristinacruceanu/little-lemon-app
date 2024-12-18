import { initializeTimes } from "../utils/Utils";
import { fetchAPI } from "../api";

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

jest.mock("../api", () => ({
  fetchAPI: jest.fn(),
}));

describe("initializeTimes", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("initializeTimes should return the correct expected values", async () => {
    const mockTimes = ["12:00 PM", "1:00 PM"];
    fetchAPI.mockResolvedValue(mockTimes);

    const result = await initializeTimes();
    expect(result).toEqual({
      availableTimes: mockTimes,
      formData: {
        date: new Date().toISOString().split("T")[0],
        time: "",
        diners: "",
        occasion: "",
        seating: "",
      },
    });

    expect(fetchAPI).toHaveBeenCalledWith(
      new Date().toISOString().split("T")[0],
    );
  });
});
