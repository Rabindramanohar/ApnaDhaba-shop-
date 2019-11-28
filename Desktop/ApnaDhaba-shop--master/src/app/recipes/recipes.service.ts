import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

   private recipes:Recipe[] = [
        new Recipe('Tasty Daal Pakoda', 
        'This is for the test', 
        'https://toriavey.com/images/2011/01/Falafel-10-640x480.jpg',
        [
            new Ingredient('daal',1),
            new Ingredient('moong daal', 2)
        ]),
        new Recipe('Yummy sprouts masala',
        'This is for the test', 
        'https://dw9y5muw47j76.cloudfront.net/recipes/_650x486_crop_center-center_none/Slow-Cooker-15-BEAN-Soup-main.jpg?mtime=20190131164600',
        [
            new Ingredient('channa', 3),
            new Ingredient('green Peas', 5)
        ])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}