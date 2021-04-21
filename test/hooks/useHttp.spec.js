import { useHttp } from "@hooks/useHttp";
import { act, renderHook } from "@testing-library/react-hooks";
import axios from "axios";

jest.mock("axios");

describe("Hook Use Http", () => {
  it("Load todos", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));

    const url = "https://URL_ANY";
    const { result, waitForNextUpdate } = renderHook(() => useHttp(url));

    await act(async () => {
      await waitForNextUpdate();
    });

    const { response, error, loading } = result.current;

    expect(loading).toBeFalsy();
    expect(error).toBeNull();
    expect(Array.isArray(response)).toBeTruthy();
  });

  it("Load todos with error", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error("Network Error"))
    );

    const url = "https://URL_ANY";
    const { result, waitForNextUpdate } = renderHook(() => useHttp(url));

    await act(async () => {
      await waitForNextUpdate();
    });

    const { response, error, loading } = result.current;

    expect(loading).toBeFalsy();
    expect(response).toBeNull();
    expect(error).not.toBeNull();
    expect(error).toBe("Network Error");
  });
});
