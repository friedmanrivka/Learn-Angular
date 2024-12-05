import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-subject-lists',
  imports: [CommonModule],
  templateUrl: './subject-lists.component.html',
  styleUrl: './subject-lists.component.scss'
})
export class SubjectListsComponent {
  subjects = [
    'components',
    'mpdules',
    'command line',
    'services and di'
  ]
  wishes=[
    'to get married with a talmid chacham and bal midos',
    'to work in software engineering in a good job of development'
  ]

}
