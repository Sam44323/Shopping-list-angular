import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'This is a recipe',
      'This was made by an idiot like you',
      'https://picsum.photos/200/300'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
