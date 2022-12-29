import { IMovie } from "../../models/IMovie";

export const mockData: IMovie[] = [
  {
    Title: "Shrek",
    imdbID: "1",
    Type: "genre",
    Poster: "poster",
    Year: "2003",
  },
  {
    Title: "Shrek 2",
    imdbID: "2",
    Type: "genre",
    Poster: "poster",
    Year: "2007",
  },
  {
    Title: "Shrek 3",
    imdbID: "3",
    Type: "genre",
    Poster: "poster",
    Year: "2010",
  },
];

export const getData = async (): Promise<IMovie[]> => {
  return new Promise((resolve) => {
    resolve(mockData);
  });
};
// export const getData = async (searchText: string): Promise<IMovie[]> => {
//   return new Promise((resolve) => {
//     resolve(mockData);
//   });
// };
// jest.mock("axios", () => ({
//     get: async () => {
//       return new Promise((resolve) => {
//         resolve({ data: { Search: mockData } });
//       });
//     },
//   }));
