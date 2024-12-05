import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SubjectListsComponent} from './subject-lists/subject-lists.component';
import {UsesListComponent} from './uses-list/uses-list.component'
import { CommonModule } from '@angular/common';

//כל המידע שנרצה שיופיע בHTML 
//צריך להופיע כאן
//מה שמופיע כאן זה דוקריטור
//שעל ידו קובעים את התכונות שלו
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SubjectListsComponent,UsesListComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'lesson-1';
  typeShow=2;
  setTypeShow(currentShow:number){
    console.log('Before:', this.typeShow); // הדפסה לפני שינוי
      this.typeShow = currentShow;
      console.log('After:', this.typeShow); //
      }
     
}
