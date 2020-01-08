import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();

   private recipes: Recipe[] = [
        new Recipe('Tasty Daal Pakoda',
        'This is for the test',
        'https://toriavey.com/images/2011/01/Falafel-10-640x480.jpg',
        [
            new Ingredient('daal', 1),
            new Ingredient('moong daal', 2)
        ]),
        new Recipe('Yummy sprouts masala',
        'This is for the test',
        // tslint:disable-next-line:max-line-length
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

      addRecipe(recipe: Recipe) {
          this.recipes.push(recipe);
          this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
          this.recipes[index] = newRecipe;
          this.recipeChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
          this.recipes.splice(index, 1);
          this.recipeChanged.next(this.recipes.slice());
      }
}
