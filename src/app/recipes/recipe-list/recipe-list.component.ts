import { Component } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://source.unsplash.com/zcUgjyqEwe8'),
    new Recipe(
      'Recipe 2',
      "The most delicious thing you've ever eaten",
      'https://source.unsplash.com/awj7sRviVXo')
  ];
}