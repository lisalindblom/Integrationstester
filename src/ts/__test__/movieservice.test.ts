/**
 *@jest-environment jsdom
 */

import { jest, test, describe, expect } from "@jest/globals";
import { IMovie } from "../models/IMovie";
import { getData } from "../services/movieservice";
import { mockData } from "../services/__mocks__/movieservice";

jest.mock("axios", () => ({
  get: async () => {
    return new Promise((resolve) => {
      resolve({ data: { Search: mockData } });
    });
  },
}));

describe("should test getData", () => {
  test("should get mock data", async () => {
    expect.assertions(3);
    let movieText: string = "movies";

    let movie: IMovie[] = await getData(movieText);

    expect(movie.length).toBe(3);
    expect(movie[2].Year).toBe("2010");
    expect(movie[0].Title).toBe("Shrek");
  });

  // test("should catch wrong data", async () => {
  //   let movieText: string = " ";

  //   let movie: IMovie[] = await getData(movieText);

  //   expect(movie).toEqual([]);
  //   expect(movie.length).toBe(0);
  // });

  // jest.mock("axios");
  // const mockAxios = axios as jest.Mocked<typeof axios>;
  // test("should catch wrong data", async () => {
  //   mockAxios.get.mockRejectedValue({ data: { Search: mockData } });

  //   // (axios.get as jest.Mock).mockReturnValueOnce({
  //   //   data: { Search: mockData },
  //   // });

  //   // (axios.get as jest.Mock).mockRejectedValue({data: {mockData}});
  //   let searchText: string = "";

  //   let movie = await getData(searchText);
  //   expect(movie).toEqual([]);
  //   expect(movie.length).toBe(0);
  // });
});
