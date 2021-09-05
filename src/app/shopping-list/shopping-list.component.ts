import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../utils/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [ShoppingService],
})
export class ShoppingListComponent implements OnInit {
  ingredient: Ingredient[] = [];
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.ingredient = this.shoppingService.getIngredients();
  }

  addNewIngredientHandler = (data: any) => {
    this.ingredient.push(new Ingredient(data.name, data.amount));
  };
}
