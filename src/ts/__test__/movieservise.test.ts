/**
*@jest-environment jsdom
*/

import { IMovie } from "../models/IMovie";
import { getData } from "../services/movieservice";

let mockData:IMovie [] =  [
  {Title:'Shrek',imdbID:'1', Type:'genre', Poster:'poster',Year:'2003'},
  {Title:'Shrek 2',imdbID:'2', Type:'genre', Poster:'poster',Year:'2007'},
  {Title:'Shrek 3',imdbID:'3', Type:'genre', Poster:'poster',Year:'2010'}
  
];

jest.mock('axios', ()=> ({
    get: async ()=> {
      return new Promise((resolve) => {
        resolve({data:{Search: mockData}});
      });
    },
}));

test ('should get mock data', async ()=>{
  expect.assertions(3);
  let movieText: string = 'movies';

  let movie = await getData(movieText);

  expect(movie.length).toBe(3);
  expect(movie[2].Year).toBe('2010');
  expect(movie[0].Title).toBe('Shrek');
});