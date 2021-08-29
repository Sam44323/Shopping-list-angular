import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  currentRecipe: Recipe;
  constructor() {}

  ngOnInit(): void {}

  setCurrentRecipe = (data: Recipe) => {
    this.currentRecipe = data;
    console.log(data);
  };
}
