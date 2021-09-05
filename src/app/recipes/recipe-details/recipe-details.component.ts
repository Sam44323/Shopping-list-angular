import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe = {} as any;
  constructor(private recipeService: RecipeService) {
    this.recipeService.recipeSelected.subscribe((value) => {
      this.recipe = value;
    });
  }

  ngOnInit() {}
}
