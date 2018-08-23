import { Component, OnInit, Input } from '@angular/core';
import { Recipes } from '../recipes.module';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() detailRecipesInformation: Recipes;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    console.log('detailRecipe', this.detailRecipesInformation);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.recipeService.addIngredientsToShoppingList(ingredients);
  }
}
