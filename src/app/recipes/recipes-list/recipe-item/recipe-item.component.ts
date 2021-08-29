import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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
  @Output('recipeItemClick') recipeItemClick: EventEmitter<any> =
    new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  setCurrentNav = () => {
    this.recipeItemClick.emit(this.recipeItem);
  };
}
