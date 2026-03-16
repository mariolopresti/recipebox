import { Component, inject } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe-service';
import { FilterByName } from '../../directives/filter-by-name';
import { DifficultyFilterComponent } from '../difficulty-filter-component/difficulty-filter-component';
import { FilterDifficulty } from '../../directives/filter-difficulty';

@Component({
  selector: 'app-recipe-component',
  imports: [RouterLink, FilterByName, DifficultyFilterComponent, FilterDifficulty],
  templateUrl: './recipe-component.html',
  styleUrl: './recipe-component.css',
})
export class RecipeComponent {
  recipeService = inject(RecipeService);
  recipes = this.recipeService.recipies;
}
