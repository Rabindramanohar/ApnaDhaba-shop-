import { Ingredient } from '../shared/ingredient.model';
import { Action } from '@ngrx/store';
import { ShoppingListActions } from './shopping-list.action';
import { Shop }

const ingredients: Ingredient[] = [
    new Ingredient('Apple', 129),
    new Ingredient('Potato', 25)
  ];

export function shoppingListReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT 
      return {
        ...state,
        ingredients: [...state, ingredients]
      };
  }
}
