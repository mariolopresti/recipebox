import { Component, inject, input } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { RecipeService } from '../../services/recipe-service';
import { DifficultyBadgeComponent } from '../difficulty-badge/difficulty-badge';
import { FilterByName } from '../../directives/filter-by-name';
import { FilterDifficulty } from '../../directives/filter-difficulty';


@Component({
  selector: 'app-recipe-card',
  imports: [RouterLink, NgClass, DifficultyBadgeComponent, FilterByName, FilterDifficulty],
  templateUrl: './recipe-card-component.html',
  styleUrl: './recipe-card-component.css',
})
export class RecipeCardComponent {
  private recipeService = inject(RecipeService);

  recipe = input.required<Recipe>();

  filterDifficulty(level: string) {
    this.recipeService.setDifficultyValue(level);
  }
}
