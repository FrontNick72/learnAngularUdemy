import { Effect, Actions } from '@ngrx/effects';

import * as RecipeActions from '../store/recipe.actions';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Recipes } from '../recipes.model';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRecipe from '../store/recipe.reducers';

@Injectable()
export class RecipeEffects {
  @Effect()
  recipeFetch = this.actions$
    .ofType(RecipeActions.FETCH_RECIPES)
    .pipe(switchMap((action: RecipeActions.FetchRecipes) => {
      return this.httpClient.get<Recipes[]>('https://ng-recipy-book.firebaseio.com/recipes.json', {
        observe: 'body',
        responseType: 'json',
      });
    }), map(
          (recipes) => {
            for (const recipe of recipes) {
              if (!recipe['ingredients']) {
                recipe['ingredients'] = [];
              }
            }
            return {
              type: RecipeActions.SET_RECIPES,
              payload: recipes
            };
          }
        ));

  @Effect({dispatch: false})
  recipeStore = this.actions$
    .ofType(RecipeActions.STORE_RECIPES)
    .pipe(withLatestFrom(this.store.select('recipes')), switchMap(([action, state]) => {
      const req = new HttpRequest('PUT', 'https://ng-recipy-book.firebaseio.com/recipes.json', state.recipes, {reportProgress: true});
        return this.httpClient.request(req);
      })
    );

  constructor (private actions$: Actions,
               private httpClient: HttpClient,
               private store: Store<fromRecipe.FeatureState>) {

  }
}
