import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[]=[

    new Ingredient('Apples','5'),
    new Ingredient('Tomatos','10')
    
  ];
  constructor(private shoppingListService : ShoppingListService) { 
	
	

	 
	   
	 
  }

  ngOnInit() {
		this.ingredients = this.shoppingListService.getIngredients();
			  this.shoppingListService.newIngredient.subscribe(
		   
		(ingredients :Ingredient[])=>{this.ingredients=ingredients;}
	   );
	
  }
  
//   onIngredientAdded(ingredient : Ingredient)
//   {
// 	  this.ingredients.push(ingredient);
//   }

}
