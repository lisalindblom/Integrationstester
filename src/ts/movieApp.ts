import { IMovie } from "./models/IMovie";
import { getData } from "./services/movieservice";

let movies: IMovie[] = [];

//anropas i roten av main.ts, hämtar formulär från html och lyssnar efter klick -> anropar handleclick
//TESTAD
export const init = () => {
  let form = document.getElementById("searchForm") as HTMLFormElement;
  form.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    exports.handleSubmit();
  });
};

//hämtar html element och lägger söktexten i en variabel
export async function handleSubmit() {
  let searchText = (document.getElementById("searchText") as HTMLInputElement)
    .value;
//tömmer containern för filmerna
  let container: HTMLDivElement = document.getElementById(
    "movie-container"
  ) as HTMLDivElement;
  container.innerHTML = "";

  //anropar getData och sparar den i en variabel
  try {
   movies = await getData(searchText);
    //om filmer hittas anropas createHtml, annars displayNoResults
    if (movies.length > 0) {
      exports.createHtml(movies, container);
    } else {
      exports.displayNoResult(container);
    }
  } catch {
    exports.displayNoResult(container);
  }
}
//tar emot och skriver ut listan, skapar html för bild,titel och container
export const createHtml = (movies: IMovie[], container: HTMLDivElement) => {
  for (let i = 0; i < movies.length; i++) {
    let movie = document.createElement("div");
    let title = document.createElement("h3");
    let img = document.createElement("img");

    //lägger till klassen movie på div, varför?
    movie.classList.add("movie");
    title.innerHTML = movies[i].Title;
    img.src = movies[i].Poster;
    img.alt = movies[i].Title;

    movie.appendChild(title);
    movie.appendChild(img);

    container.appendChild(movie);
    console.log(movie);
  }
};

export const displayNoResult = (container: HTMLDivElement) => {
  let noMessage = document.createElement("p");

  noMessage.innerHTML = "Inga sökresultat att visa";

  container.appendChild(noMessage);
  
};
