import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.module';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  recipes: Recipes[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onShowDetail(recipeEl: Recipes) {
    this.recipeService.recipeSelected.emit(recipeEl);
  }
}
