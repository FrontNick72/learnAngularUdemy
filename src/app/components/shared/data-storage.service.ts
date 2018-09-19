import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipes } from '../recipes/recipes.module';
import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://ng-recipy-book.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get('https://ng-recipy-book.firebaseio.com/recipes.json')
      .pipe(map(
        (response: Response) => {
          const recipes: Recipes[] = response.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ))
      .subscribe(
        (recipes: Recipes[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
