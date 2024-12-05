import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SubjectListsComponent} from './subject-lists/subject-lists.component'

//כל המידע שנרצה שיופיע בHTML 
//צריך להופיע כאן
//מה שמופיע כאן זה דוקריטור
//שעל ידו קובעים את התכונות שלו
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SubjectListsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string = 'lesson-1';
}
