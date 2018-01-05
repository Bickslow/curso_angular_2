import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(public http:HttpClient) {
  }

  getArtistas(){
    let url:string = "https://api.spotify.com/api/token";
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let body:any = ({
      'grant_type': 'client_credentials',
      'client_id': 'cb07e054c2cc40fd8e0ff116d4161a3f',
      'client_secret': '38772d378a4d4e9db9a23a2eda259788'
    });
    this.http.post(url,{headers:headers,body:body}).subscribe(data =>{
      console.log(data);
      /**let url:string = "https://api.spotify.com/v1/search?query=sam+tsui&type=artist&limit=20";
      let headers = new HttpHeaders({
        'authorization': 'Bearer BQDwn134AJqTJR3veYvcMWQhDwj6ykDH6AXKJ2xaEV9AyWSWvpYhOCyC9JlIItCVcs5-Ibs539RQ3p3aytU'
      });
      this.http.get(url,{headers}).subscribe(data =>{
        console.log(data);
      });*/
    });

  }
}
