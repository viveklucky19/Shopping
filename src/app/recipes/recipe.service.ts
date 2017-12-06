import { Recipe } from "./recipe.modal";
import { EventEmitter } from "@angular/core";

export class RecipeService{
	
	
	recipeSelected = new EventEmitter<Recipe>();
	 recipes : Recipe[] =[
     new Recipe ('test recipe 1',
    'this is test description',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/512px-Recipe_logo.jpeg'),

    new Recipe ('test recipe 2',
    'this is test description',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/512px-Recipe_logo.jpeg')
];


getRecipes(){
	
	return this.recipes.slice();
}
}