import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  @Output('currentRecipe') currentRecipe: EventEmitter<any> =
    new EventEmitter<any>();
  recipes: Recipe[] = [
    new Recipe(
      'This is a recipe',
      'This was made by an idiot like you',
      'https://picsum.photos/200/300'
    ),
    new Recipe(
      'This is another recipe',
      'This was made by another idiot like you',
      'https://picsum.photos/200/300'
    ),
    new Recipe(
      'This is also a recipe',
      'This was also made by an idiot like you',
      'https://picsum.photos/200/300'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  setCurrentRecipe = (data: any) => {
    this.currentRecipe.emit(data);
  };
}
