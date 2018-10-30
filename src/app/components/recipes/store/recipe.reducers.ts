import { Ingredient } from '../../shared/ingredient.model';
import { Recipes } from '../recipes.model';
import * as RecipeAction from './recipe.actions';
import * as fromApp from '../../../store/app.reducers';

export interface State {
  recipes: Recipes[];
}

export interface FeatureState extends fromApp.AppState {
  recipes: State;
}

const initialState: State = {
  recipes: [
    new Recipes(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipes('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ]
};

export function recipeReducer(state = initialState, action: RecipeAction.RecipeActions) {
  switch (action.type) {
    case RecipeAction.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      };
    case RecipeAction.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case RecipeAction.UPDATE_RECIPE:
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;

      return {
        ...state,
        recipes: recipes
      };
    case RecipeAction.DELETE_RECIPE:
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);

      return {
        ...state,
        recipes: oldRecipes
      };
    default:
    return state;
  }
}
