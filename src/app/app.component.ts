import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Shopping-list-angular';
  currentNav: string = 'Recipes';

  setCurrentNav = (data: string) => {
    this.currentNav = data;
  };
}
