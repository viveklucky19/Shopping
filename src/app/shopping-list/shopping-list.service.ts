import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService{
	
	
private	ingredients : Ingredient[]=[

    new Ingredient('Apples','5'),
    new Ingredient('Tomatos','10')
    
];


  newIngredient = new EventEmitter<Ingredient[]>();
	
  getIngredients()
  {
	  
	console.log("from srveice get",this.ingredients);
	  return this.ingredients.slice();
	}
	
	addIngredient(item :Ingredient)
	{
		this.ingredients.push(item);
		
		this.newIngredient.emit(this.ingredients.slice());
		
		console.log("from srveice add",this.ingredients);
	}
}