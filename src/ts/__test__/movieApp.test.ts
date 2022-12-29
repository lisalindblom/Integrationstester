/**
 *@jest-environment jsdom
 */
import { jest, test, describe } from "@jest/globals";
import { IMovie } from "../models/IMovie";
import * as movieAppFunctions from "../movieApp";
import * as service from "./../services/movieservice";
import { mockData } from "./../services/__mocks__/movieservice";

test("should call handleSubmit when submit", () => {
  document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button> </form>`;

  let spy = jest.spyOn(movieAppFunctions, "handleSubmit").mockImplementation(
    () =>
      new Promise((resolve) => {
        resolve();
      })
  );

  movieAppFunctions.init();
  (document.getElementById("searchForm") as HTMLFormElement).submit();
  expect(spy).toHaveBeenCalled();
});

/******************************funkar ****************************************** */
jest.mock("./../services/movieservice.ts");
beforeEach(() => {
  jest.resetModules();
  jest.resetAllMocks();
});
test("should create html for array", async () => {
  document.body.innerHTML = "";
  document.body.innerHTML = `<div id='testContainer'></div>`;
  let testContainer = document.getElementById(
    "testContainer"
  ) as HTMLDivElement;

  let searchText = "Shrek";
  let movies: IMovie[] = await service.getData(searchText);

  movieAppFunctions.createHtml(movies, testContainer);

  expect(document.querySelectorAll("h3").length).toBe(3);
  expect(document.querySelectorAll("div.movie").length).toBe(3);
  expect(document.querySelectorAll("img").length).toBe(3);

  document.body.innerHTML = "";
});

/********************************* Funkar *********************************************** */

test("should change p-tag", () => {
  document.body.innerHTML = `<div id='testContainer'></div> `;
  let testContainer = document.getElementById(
    "testContainer"
  ) as HTMLDivElement;

  movieAppFunctions.displayNoResult(testContainer);

  expect(document.querySelectorAll("p").length).toBe(1);
});

// jest.mock("./../services/movieservice.ts");
// describe("handleSubmit", () => {
//   document.body.innerHTML = "";

//   test("should call createHtml", async () => {
//     // let searchText: string = "test";
//     document.body.innerHTML = `<form id="searchForm">
//       <input type="text" id="searchText" placeholder="Skriv titel här" />
//       <button type="submit" id="search">Sök</button> </form> <div id='container></div>`;

//     let container: HTMLDivElement = document.getElementById(
//       "movie-container"
//     ) as HTMLDivElement;

//     let searchText = document.getElementById("searchText") as HTMLInputElement;
//     let movies: IMovie[] = mockData;

//     let spy = jest.spyOn(movieAppFunctions, "createHtml").mockImplementation(
//       () =>
//         new Promise((resolve) => {
//           resolve(container);
//         })
//     );

//     await movieAppFunctions.handleSubmit();
//     expect(spy).toHaveBeenCalled();
//   });

//   jest.mock("./../services/movieservice.ts");
//   test("should call createHtml", () => {
//     let movies: IMovie[] = mockData;

//     document.body.innerHTML = `<div id='container></div>`;
//     let container: HTMLDivElement = document.getElementById(
//       "movie-container"
//     ) as HTMLDivElement;

//     movieAppFunctions.handleSubmit();

//     expect(document.querySelectorAll("div.container")).toBe("");
//   });
//   document.body.innerHTML = "";
// });
