import * as functions from "./../functions";
import { IMovie } from "../models/IMovie";

describe("movieSort", () => {
  test("should sort a-ö", async () => {
    let movies: IMovie[] = [
      {
        Title: "Shrek",
        imdbID: "1",
        Type: "genre",
        Poster: "poster",
        Year: "2003",
      },
      {
        Title: "Shrek 3",
        imdbID: "2",
        Type: "genre",
        Poster: "poster",
        Year: "2010",
      },
      {
        Title: "Shrek 2",
        imdbID: "3",
        Type: "genre",
        Poster: "poster",
        Year: "2007",
      },
      {
        Title: "Shrek 2",
        imdbID: "3",
        Type: "genre",
        Poster: "poster",
        Year: "2007",
      },
    ];
    let desc: boolean = true;

    functions.movieSort(movies);

    expect(movies[0].Title).toBe("Shrek");
    expect(movies[3].Title).toBe("Shrek 3");
  });

  test("should sort ö-a", () => {
    let movies: IMovie[] = [
      {
        Title: "Shrek",
        imdbID: "1",
        Type: "genre",
        Poster: "poster",
        Year: "2003",
      },
      {
        Title: "Shrek 2",
        imdbID: "3",
        Type: "genre",
        Poster: "poster",
        Year: "2007",
      },
      {
        Title: "Shrek 3",
        imdbID: "2",
        Type: "genre",
        Poster: "poster",
        Year: "2010",
      },
      {
        Title: "Shrek 2",
        imdbID: "3",
        Type: "genre",
        Poster: "poster",
        Year: "2007",
      },
    ];
    let desc: boolean = false;

    functions.movieSort(movies, desc);

    expect(movies[3].Title).toBe("Shrek");
    expect(movies[0].Title).toBe("Shrek 3");
  });
});
