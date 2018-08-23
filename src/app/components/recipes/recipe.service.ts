
import { EventEmitter } from '@angular/core';

import { Recipes } from './recipes.module';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipes>();

  private recipes: Recipes[] = [
    new Recipes('A test Recipe', 'This is Simply a test',
      'http://potchefstroomherald.co.za/wp-content/uploads/sites/117/2015/05/recipe-575434_640_6049519_8594059_6672824.png'),
    new Recipes('A test Recipe 2', 'This is Difficult a test',
      'http://potchefstroomherald.co.za/wp-content/uploads/sites/117/2015/05/recipe-575434_640_6049519_8594059_6672824.png'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
