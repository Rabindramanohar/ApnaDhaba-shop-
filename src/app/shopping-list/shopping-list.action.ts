import { Action } from '@ngrx/store';
import { Ingredient } from '../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class ShoppingListActions implements Action {
    readonly type = ADD_INGREDIENT;
    payload: Ingredient;
  static ADD_INGREDIENT: any;
}
