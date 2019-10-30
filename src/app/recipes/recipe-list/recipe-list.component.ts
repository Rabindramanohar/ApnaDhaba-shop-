import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes:Recipe[] = [
    new Recipe('A Test Recipe', 'This is for the test', 'https://toriavey.com/images/2011/01/Falafel-10-640x480.jpg'),
    new Recipe('Another Recipe', 'This is for the test', 'https://dw9y5muw47j76.cloudfront.net/recipes/_650x486_crop_center-center_none/Slow-Cooker-15-BEAN-Soup-main.jpg?mtime=20190131164600')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
      
  }

}
