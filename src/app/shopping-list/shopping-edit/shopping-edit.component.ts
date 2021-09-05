import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {}

  addNewIngredient = (name: any, amount: any) => {
    this.shoppingService.addNewIngredient({
      name,
      amount,
    });
  };
}
