import { Component } from '@angular/core';

//Component Decorator
//includes metadata for the component like the id-selector "app-root" --> why we see <app-root></app-root> in
//index.html
@Component({
  selector: 'app-root',
  //points to html template
  templateUrl: './app.component.html',
  //points to style sheet
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
