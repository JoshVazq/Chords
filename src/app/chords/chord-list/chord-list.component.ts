import { Component, OnInit } from '@angular/core';
import { ChordsService } from '../chords.service';


@Component({
  selector: 'chord-list',
  templateUrl: './chord-list.component.html',
  styleUrls: ['./chord-list.component.css']
})
export class ChordListComponent implements OnInit {
  chords: any = [];
  
  constructor(private chordsService: ChordsService) { }
  
  ngOnInit() {
    this.chordsService.getAllChords().subscribe(chords => {
      this.chords = chords;
    });
  }

}
