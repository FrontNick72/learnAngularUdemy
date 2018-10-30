import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromRecipe from '../store/recipe.reducers';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.pug',
  styleUrls: ['./recipe-book.component.styl']
})
export class RecipeBookComponent implements OnInit {
  recipeState: Observable<fromRecipe.State>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromRecipe.FeatureState>) {
  }

  ngOnInit() {
    this.recipeState = this.store.select('recipes');
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
