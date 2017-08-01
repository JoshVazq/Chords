import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChordListComponent } from './chord-list/chord-list.component';
import { ChordDetailComponent } from "./chord-detail/chord-detail.component";
import { ChordsService } from "./chords.service";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'chords', pathMatch: 'full' },
    { path: 'chords', component: ChordListComponent },
    { path: 'chords/:id', component: ChordDetailComponent },
]

export const moduleConfig = {
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers:[
    ChordsService
  ],
  declarations: [ChordListComponent, ChordDetailComponent]
}