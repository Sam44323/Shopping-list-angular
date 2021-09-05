import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../../recipe.service';

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
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  setCurrentNav = () => {
    this.recipeService.setCurrentRecipe(this.recipeItem);
  };
}
