import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'A Test Recipe',
          'This is simply a test',
          'https://source.unsplash.com/zcUgjyqEwe8',
          [
            new Ingredient('bread loaf', 1),
            new Ingredient('eggs', 6)
          ]),
        new Recipe(
          'Recipe 2',
          "The most delicious thing you've ever eaten",
          'https://source.unsplash.com/awj7sRviVXo',
          [
            new Ingredient('salmon fillet', 2),
            new Ingredient('cucumber', 1)
          ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}