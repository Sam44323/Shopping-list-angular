import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../utils/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(private shoppingService: ShoppingService) {
    this.shoppingService.ingredientsChangeEmitter.subscribe((value) => {
      this.ingredients = value;
    });
  }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
  }
}
