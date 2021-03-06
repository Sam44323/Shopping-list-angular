import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../utils/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'This is a recipe',
      'This was made by an idiot like you',
      'https://picsum.photos/200/300',
      [
        new Ingredient('Item-A', 14),
        new Ingredient('Item-A', 14),
        new Ingredient('Item-A', 14),
      ]
    ),
    new Recipe(
      'This is another recipe',
      'This was made by another idiot like you',
      'https://picsum.photos/200/300',
      [
        new Ingredient('Item-A', 14),
        new Ingredient('Item-A', 14),
        new Ingredient('Item-A', 14),
      ]
    ),
    new Recipe(
      'This is also a recipe',
      'This was also made by an idiot like you',
      'https://picsum.photos/200/300',
      [
        new Ingredient('Item-A', 14),
        new Ingredient('Item-A', 14),
        new Ingredient('Item-A', 14),
      ]
    ),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes = () => this.recipes.slice(); // returning the copy of the recipes array instead of the exact array pointer
}
