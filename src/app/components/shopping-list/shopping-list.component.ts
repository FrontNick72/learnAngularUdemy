import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.html'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit, DoCheck {
  ingredients: Ingredient[];

  newIngredient: string;
  newAmountIngredient: string;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  ngDoCheck() {
    this.ingredients = this.shoppingListService.getIngredients();
  }

}
