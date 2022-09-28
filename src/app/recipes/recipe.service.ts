import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken curry',
      'This easy staple chicken curry is a fantastic recipe for family dinners. Its made with just a handful of ingredients and is enriched with creamy yogurt.',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/easy-chicken-curry-aa22a0b.jpg',
      [
        new Ingredient('tbsp sunflower oil', 2),
        new Ingredient('onion, thinly sliced', 1),
        new Ingredient('garlic cloves, crushed', 2),
        new Ingredient('thumb-sized piece of ginger, grated', 1),
        new Ingredient('chicken thighs, boneless and skinless', 6),
        new Ingredient('tbsp medium spice paste (tikka works well)', 3),
        new Ingredient('can chopped tomatoes', 4),
        new Ingredient('Greek yogurt', 1),
        new Ingredient('small bunch of coriander, leaves chopped', 1),
        new Ingredient('ground almonds', 1),
        new Ingredient('naan breads or cooked basmati rice, to serve', 8),
      ]
    ),
    new Recipe(
      'Delicious pancakes',
      'Learn a skill for life with our foolproof easy crêpe recipe that ensures perfect pancakes every time – elaborate flip optional.',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1273477_8-ad36e3b.jpg?',
      [
        new Ingredient('plain flour', 2),
        new Ingredient('large eggs', 2),
        new Ingredient('milk', 1),
        new Ingredient('tbsp sunflower or vegetable oil', 1),
        new Ingredient('caster sugar to serve (optional)', 1),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
