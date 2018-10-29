import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


import { RecipeService } from '../recipe.service';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.pug',
  styleUrls: ['./recipe-book.component.styl']
})
export class RecipeBookComponent implements OnInit, OnDestroy {
  recipes: Recipes[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipes[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    // if (this.authService.isAuthenticated()) {
      this.router.navigate(['new'], { relativeTo: this.route });
    // } else {
      // this.router.navigate(['/signin']);
    // }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
