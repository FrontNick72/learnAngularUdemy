import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientAdded = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 4),
    new Ingredient('Coconut', 1)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientAdded.next(this.ingredients.slice());
  }

  clear() {
    this.ingredients.splice(0, this.ingredients.length);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientAdded.next(this.ingredients.slice());
  }
}
