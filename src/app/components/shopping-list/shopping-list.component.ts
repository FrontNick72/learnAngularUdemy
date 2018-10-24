import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shopping-list.component.pug',
  styleUrls: ['./shopping-list.component.styl']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingListState: Observable<{ ingredients: Ingredient[] }>;
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService, private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) {}

  ngOnInit(): void {
    this.shoppingListState = this.store.select('shoppingList');
    // this.subscription = this.shoppingListService.ingredientAdded.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
