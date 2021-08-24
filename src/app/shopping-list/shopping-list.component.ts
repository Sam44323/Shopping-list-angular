import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredient: string[] = ['Item A', 'Item B', 'Item C'];
  constructor() {}

  ngOnInit(): void {}
}
