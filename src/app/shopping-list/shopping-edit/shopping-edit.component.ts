import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

	
	@ViewChild('nameInput') nameInput : ElementRef;
	@ViewChild('amountInput') amountInput :ElementRef;
	
	@Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddItem()
  {
	  const ingredient = new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value);
	 this.ingredientAdded.emit(ingredient);
		
  }
}
