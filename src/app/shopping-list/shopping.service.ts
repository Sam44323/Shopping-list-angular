import { Injectable } from '@angular/core';
import { Ingredient } from '../utils/ingredient.model';

@Injectable()
export class ShoppingService {
  private ingredient: Ingredient[] = [
    new Ingredient('Item A', 90),
    new Ingredient('Item B', 40),
    new Ingredient('Item C', 100),
  ];

  getIngredients = () => this.ingredient.slice();
}
