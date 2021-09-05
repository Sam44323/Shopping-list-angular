import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../utils/ingredient.model';

@Injectable()
export class ShoppingService {
  private ingredients: Ingredient[] = [
    new Ingredient('Item A', 90),
    new Ingredient('Item B', 40),
    new Ingredient('Item C', 100),
  ];

  getIngredients = () => this.ingredients.slice();

  ingredientsChangeEmitter = new EventEmitter<Ingredient[]>();

  addNewIngredient = (data: Ingredient) => {
    const { name, amount } = data;
    this.ingredients.push({
      name,
      amount,
    });
    this.ingredientsChangeEmitter.emit(this.ingredients);
  };
}
