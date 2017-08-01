import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChordsService } from '../chords.service';


@Component({
  selector: 'app-chord-detail',
  templateUrl: './chord-detail.component.html',
  styleUrls: ['./chord-detail.component.css']
})
export class ChordDetailComponent implements OnInit {
  chord: any;
  
  constructor(private route: ActivatedRoute, private chordsService: ChordsService) { }
  
  ngOnInit() {
    this.route.params
    .subscribe(params => {
      const chordId = <string>params['id'];
      if (chordId) {
        this.chordsService.getChordById(chordId).subscribe(chord => {
          this.chord = chord;
        });
      }
    });
  }

}
