import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipes } from '../recipes/recipes.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    // const token = this.authService.getToken();
    // const params = new HttpParams().set('auth', token);
    // const headers = new HttpHeaders().set('Authorization', 'Bea213fxzfasdf');

    // return this.httpClient.put('https://ng-recipy-book.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   params: params,
    //   // headers: headers
    // });
    const req = new HttpRequest('PUT', 'https://ng-recipy-book.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      reportProgress: true,
      // params: params
    });
    return this.httpClient.request(req);
  }

  getRecipes() {
    // const token = this.authService.getToken();
    // const params = new HttpParams().set('auth', token);
    // this.httpClient.get<Recipes[]>('https://ng-recipy-book.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipes[]>('https://ng-recipy-book.firebaseio.com/recipes.json', {
      observe: 'body', // byDefault option. I can use: 'response' and etc in documentation
      responseType: 'json', // byDefault option. I can use: 'text', 'blob', 'arraybuffer' and etc;
      // params: params
    })
      .pipe(map(
        // (response: Response) => {
          // const recipes: Recipes[] = response.json();
        (recipes) => { // in HttpClient response return by Default
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
