import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ChordsService {
  private chordsUrl = '/api/chords'; 
  
  constructor(private http: Http) { }

  getAllChords() {
    return this.http.get(`${this.chordsUrl}`)
      .map(res => res.json());
  }
  getChordById(chordId:string) {
    return this.http.get(`${this.chordsUrl}/${chordId}`)
      .map(res => res.json());
  }

}
