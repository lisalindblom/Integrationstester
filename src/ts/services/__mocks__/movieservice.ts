import { IMovie } from "../../models/IMovie";
import { IOmdbResponse } from "../../models/IOmdbResponse";

let mockMovie:IMovie [] =  [
    {Title:'Shrek',imdbID:'1', Type:'genre', Poster:'poster',Year:'2003'},
    {Title:'Shrek 2',imdbID:'2', Type:'genre', Poster:'poster',Year:'2007'},
    {Title:'Shrek 3',imdbID:'3', Type:'genre', Poster:'poster',Year:'2010'}
    
];

export const getData = async(searchText: string): Promise<IMovie[]>=> {
    return new Promise((resolve,reject)=> {
        resolve(mockMovie);
        reject([]);
    })
}


