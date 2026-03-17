import { Component, inject, signal } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe-service';
import { FilterByName } from '../../directives/filter-by-name';
import { DifficultyFilterComponent } from '../difficulty-filter-component/difficulty-filter-component';
import { FilterDifficulty } from '../../directives/filter-difficulty';
import { NgClass } from '@angular/common';
import { DifficultyBadgeComponent } from '../difficulty-badge/difficulty-badge';
import { RecipeCardComponent } from '../recipe-card-component/recipe-card-component';

@Component({
  selector: 'app-recipe-component',
  imports: [
    DifficultyFilterComponent,
    RecipeCardComponent,
  ],
  templateUrl: './recipe-component.html',
  styleUrl: './recipe-component.css',
})
export class RecipeComponent {
  recipeService = inject(RecipeService);

  recipes = signal<Recipe[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.loading.set(true);
    this.error.set(null);

    this.recipeService.getRecipes().subscribe({
      next: (data) => {
        console.log('Ricette caricate:', data);
        this.recipes.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.error.set('Errore nel caricamento delle ricette');
        this.loading.set(false);
      },
    });
  }
}
