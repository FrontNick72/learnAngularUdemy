import { Component, OnInit, Input } from '@angular/core';

import { Recipes } from '../../recipes.module';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.pug',
  styleUrls: ['./recipe-item.component.styl']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipes;
  @Input() index: number;

  ngOnInit() {
  }
}
