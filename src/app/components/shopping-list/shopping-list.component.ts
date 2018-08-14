import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shop-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.html']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 4),
    new Ingredient('Coconut', 1)
  ];
}
