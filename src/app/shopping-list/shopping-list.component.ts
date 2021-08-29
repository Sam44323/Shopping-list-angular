import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../utils/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredient: Ingredient[] = [
    new Ingredient('Item A', 90),
    new Ingredient('Item B', 40),
    new Ingredient('Item C', 100),
  ];
  constructor() {}

  ngOnInit(): void {}

  addNewIngredientHandler = (data: any) => {
    this.ingredient.push(new Ingredient(data.name, data.amount));
  };
}
