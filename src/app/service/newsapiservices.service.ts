import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
//newsapiurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f2ca9406cac846938154f1d4bb74ab4a"

  // technews()
techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f2ca9406cac846938154f1d4bb74ab4a"

//businessapi()

businessApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f2ca9406cac846938154f1d4bb74ab4a"

//entertainmentnews()
entertainmentApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=f2ca9406cac846938154f1d4bb74ab4a"


//healthnews()
healthApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=f2ca9406cac846938154f1d4bb74ab4a"

  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl)
  }
  technews():Observable<any>
  {
    return this._http.get(this.techApiUrl)
  }

  businessnews():Observable<any>
  {
    return this._http.get(this.businessApiUrl)
  }

  entertainmentnews():Observable<any>
  {
    return this._http.get(this.entertainmentApiUrl)
  }
  healthnews():Observable<any>
  {
    return this._http.get(this.healthApiUrl)
  }
}
