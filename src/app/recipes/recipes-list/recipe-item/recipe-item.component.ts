import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipeItem: {
    name: string;
    imagePath: string;
    description: string;
  };
  @Input('index') index: number;
  constructor() {}

  ngOnInit(): void {}
}
