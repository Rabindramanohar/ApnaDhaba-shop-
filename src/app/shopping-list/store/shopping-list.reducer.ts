import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.action';

const initialState = {Ingredient: [
    new Ingredient('Apple', 129),
    new Ingredient('Potato', 25)
  ]};


export function shoppingListReducer(state = initialState, action: ShoppingListActions.AddIngredient) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.Ingredient, action.payload]
      };
    default:
      return state;
  }
}
