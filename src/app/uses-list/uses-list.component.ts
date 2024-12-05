import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-uses-list',
  imports: [CommonModule],
  templateUrl: './uses-list.component.html',
  styleUrl: './uses-list.component.scss'
})
export class UsesListComponent {
uses=[{
  feature:'single page application',
  explanation:'הדפדפן נשאר כל הזמן באותה כתובת בסיסית ולא נטען שוב'
},{
  feature:'pwa -progressive web app ',
  explanation:'ניתן ליצור אפליקציה שיהיה ניתן להשתמש בה בצורה דומה מאד לאפליקציה אמיתית של מובייל אבל מתבססת על ווב'
}
]
}
