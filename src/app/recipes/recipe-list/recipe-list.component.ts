import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is a test',
      'https://cdn.pixabay.com/photo/2018/03/06/09/02/food-3202918_1280.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
