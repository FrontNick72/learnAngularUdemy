
import { Injectable } from '@angular/core';

import { Recipes } from './recipes.module';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {


  private recipes: Recipes[] = [
    new Recipes(
      1,
      'Shaurma',
      'Fast and Delicious',
      'http://kamelena.ru/recipes/image/500/505/f505-shaurma.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('cucumber', 1),
        new Ingredient('tomato', 1),
        new Ingredient('pita', 1)
      ]
    ),
    new Recipes(
      2,
      'Soupe',
      'Dish for lunch',
      'http://kamelena.ru/recipes/image/500/533/f533-borsh.jpg',
      [
        new Ingredient('Meat', 3),
        new Ingredient('Carrot', 1),
        new Ingredient('Noodles', 1)
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    const recipe = this.recipes.find(
      (r) => {
        return r.id === id;
      }
    );
    return recipe;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
