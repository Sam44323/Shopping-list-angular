import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  currentRecipe: Recipe = new Recipe(
    'Recipe Name',
    'Description for the recipe',
    'https://picsum.photos/200/300'
  );
  constructor() {}

  ngOnInit(): void {}

  setCurrentRecipe = (data: Recipe) => {
    this.currentRecipe = data;
    console.log(data);
  };
}
