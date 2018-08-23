import { Component, OnInit } from '@angular/core';
import { Recipes } from './recipes.module';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}
  recipeDetailEl: Recipes;

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipes) => {
        this.recipeDetailEl = recipe;
      }
    );
  }
}
