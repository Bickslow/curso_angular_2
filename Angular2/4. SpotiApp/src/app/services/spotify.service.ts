import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  artistas:any[] = [];
  urlSpotify ="https://api.spotify.com/v1/";
  token:string ="BQAfgJ54JSoJ4uWk1XBfpNqlZ6IaAbNLraaEfZxI8CbtAtIoMf6YkHLGA6ATfTJFpzt2TGrS85rrGYmXpVc";
  constructor(public http:HttpClient) {
  }
  private getHeaders():HttpHeaders{
    let headers = new HttpHeaders({
      'authorization': 'Bearer '+ this.token
    });
    return headers;
  }
  getArtistas(termino:string){
      let url:string = `${ this.urlSpotify }search?query=${ termino }&type=artist&limit=20`;
      let headers = this.getHeaders();
      return this.http.get(url,{headers})
        .map(resp=>{
          this.artistas = resp['artists']['items'];
          return this.artistas;
        });
  }
  getArtista(id:string){
      let url:string = `${ this.urlSpotify }artists/${ id }`;
      let headers = this.getHeaders();
      return this.http.get(url,{headers});
  }

  getTopTracks(id:string){
      let url:string = `${ this.urlSpotify }artists/${ id }/top-tracks?country=ES`;
      let headers = this.getHeaders();
      return this.http.get(url,{headers})
        .map(resp=>{
          return resp['tracks'];
        });
  }
}
