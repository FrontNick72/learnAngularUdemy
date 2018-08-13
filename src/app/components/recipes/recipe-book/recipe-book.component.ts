import { Component } from '@angular/core';
import { Recipes } from '../recipes.module';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent {
  recipes: Recipes[] = [
    new Recipes('A test Recipe', 'This is Simply a test',
      'http://potchefstroomherald.co.za/wp-content/uploads/sites/117/2015/05/recipe-575434_640_6049519_8594059_6672824.png'),
    new Recipes('A test Recipe 2', 'This is Difficult a test',
      'http://potchefstroomherald.co.za/wp-content/uploads/sites/117/2015/05/recipe-575434_640_6049519_8594059_6672824.png'),
  ];

  constructor() {
    console.log(this.recipes);

  }
}
