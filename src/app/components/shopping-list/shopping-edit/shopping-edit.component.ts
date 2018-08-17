import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input, OnChanges } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnChanges {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Input() ingredientsArray: Ingredient[];
  @Input() valuesIngredient: Ingredient;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('change', this.valuesIngredient);

    // this.nameInput.nativeElement.value = this.valuesIngredient.name;
    // this.amountInput.nativeElement.value = this.valuesIngredient.amount;
  }

  onAddItem() {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);

    this.ingredientAdded.emit(newIngredient);
  }

  onDeleteItem() {
    const nameInput = this.nameInput.nativeElement.value;
    const amountInput = this.amountInput.nativeElement.value;

    this.ingredientsArray.forEach((element, index) => {
      element.name === nameInput ? this.ingredientsArray.splice(index, 1) : '';
    });
  }

  onClearList() {
    console.log('clear', this.ingredientsArray);

    this.ingredientsArray.splice(0, this.ingredientsArray.length);
  }
}
