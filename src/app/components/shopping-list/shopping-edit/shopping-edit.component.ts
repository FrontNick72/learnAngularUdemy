import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../../store/app.reducers';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.pug',
  styleUrls: ['./shopping-edit.component.styl']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredient;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.subscription = this.store.select('shoppingList')
      .subscribe(
        data => {
          if (data.editedIngredientIndex > -1) {
            this.editedItem = data.editedIngredient;
            this.editMode = true;
            this.slForm.setValue({
              name: this.editedItem.name,
              amount: this.editedItem.amount
            });
          } else {
            this.editMode = false;
          }
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({ ingredient: newIngredient }));
      this.editMode = false;
    } else {
      // this.shoppingListService.addIngredient(newIngredient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }

    this.slForm.reset();
  }

  onDelete() {
    // const nameInput = this.nameInput.nativeElement.value;
    // const amountInput = this.amountInput.nativeElement.value;
    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.DeleteIngredient());
      this.onClear();
    }
  }

  onClear() {
    // this.shoppingListService.clear();
    this.slForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.subscription.unsubscribe();
  }
}
