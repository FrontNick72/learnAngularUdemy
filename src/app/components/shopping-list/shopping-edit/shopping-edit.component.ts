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
  @Output() newIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('change', this.valuesIngredient);

    // this.nameInput.nativeElement.value = this.valuesIngredient.name;
    // this.amountInput.nativeElement.value = this.valuesIngredient.amount;
  }

  onAddItem() {
    this.newIngredient.emit({
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value
    });
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
