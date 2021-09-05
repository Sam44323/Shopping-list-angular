import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../utils/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredient: Ingredient[] = [];
  constructor(private shoppingService: ShoppingService) {
    this.shoppingService.ingredientsChangeEmitter.subscribe((value) => {
      this.ingredient = value;
    });
  }

  ngOnInit() {
    this.ingredient = this.shoppingService.getIngredients();
  }
}
