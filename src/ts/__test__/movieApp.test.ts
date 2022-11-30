/**
*@jest-environment jsdom
*/

import * as movieAppFunctions  from '../movieApp';
import { getData } from '../services/movieservice';


test ('should call handleSubmit when submit', ()=>{
    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button> </form>`;

    let spy = jest.spyOn(movieAppFunctions,'handleSubmit').mockImplementation(
        ()=> 
        new Promise((resolve) => {
            resolve();
        })
    )
   
    movieAppFunctions.init();
    (document.getElementById('searchForm') as HTMLFormElement).submit();
    expect(spy).toHaveBeenCalled();
});

describe ('handleSubmit', ()=> {
    document.body.innerHTML= '';
    // test('should call getData', async ()=> {
    //     let searchText = (document.getElementById("searchText") as HTMLInputElement);
    //     searchText.value = 'Shrek 3';

    //     let spy = jest.spyOn(movieAppFunctions, 'get').mockResultValue();
            

    // });
    test('should call create html', async ()=> {

        expect.assertions(1);
        document.body.innerHTML = `<input type="text" id="searchText" 
        placeholder="Skriv titel här" />`;

        let searchText = (document.getElementById("searchText") as HTMLInputElement);
        searchText.value = 'Shrek 3';

        let movies = await getData('searchText');
        let container: HTMLDivElement = document.getElementById(
            "movie-container"
          ) as HTMLDivElement;

        let spy = jest.spyOn(movieAppFunctions,'displayNoResult').mockImplementation(
            ()=> 
            new Promise((resolve) => {
                resolve(container);
            })
        )

        expect(spy).toHaveBeenCalled();

    });
    // test('should call displayNoResults');
});

// test('should createHtml');

// går displayNoResult att testa? test('')