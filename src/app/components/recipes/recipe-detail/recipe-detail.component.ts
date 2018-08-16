import { Component, OnInit, Input } from '@angular/core';
import { Recipes } from '../recipes.module';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() detailRecipesInformation: Recipes;

  constructor() {
  }

  ngOnInit() {
    console.log('detailRecipe', this.detailRecipesInformation);
  }

}
