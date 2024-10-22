import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { pluck } from 'rxjs';
/*
//Everything here is a little demo of observable of type 'Car'
interface Car{
  year:number;
  color:string;
  running: boolean;
  make : {
    name:string;
    dateCreated : number
  }
}

const observable = new Observable<Car>((observer)=>
{
  observer.next(
    {
      year : 2000,
      color: 'Red',
      running : true,
      make :
      {
        name: 'Chevy',
        dateCreated : 1950
      }
    }
  );
}).pipe(
  pluck('make','name')
);

observable.subscribe(
  (value) =>
  {
    console.log(value);
  }
)*/

interface WikipediaResponse {
  query: {
    search: {
      title : string,
      snippet : string
    }[]
  }
}


@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  //dependency injection httpclient
  constructor(private http:HttpClient) { }

  public search(term:string){

    //key value pairs in params will be turned into query string
    return this.http.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php',
      {
        params : {
        action : 'query',
        format : 'json',
        list : 'search',
        utf8 : '1',
        srsearch:term,
        origin : '*'
      }
  }).pipe(pluck('query','search'));
  }
}
