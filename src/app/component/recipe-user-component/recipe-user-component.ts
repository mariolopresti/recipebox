import { Component, computed, inject } from '@angular/core';
import { RecipeService } from '../../services/recipe-service';
import { AuthService } from '../../services/auth-service';
import { DifficultyFilterComponent } from '../difficulty-filter-component/difficulty-filter-component';
import { RecipeCardComponent } from '../recipe-card-component/recipe-card-component';
import { FilterByName } from '../../directives/filter-by-name';
import { FilterDifficulty } from '../../directives/filter-difficulty';

@Component({
  selector: 'app-recipe-user-component',
  imports: [DifficultyFilterComponent, RecipeCardComponent, FilterByName, FilterDifficulty],
  templateUrl: './recipe-user-component.html',
  styleUrl: './recipe-user-component.css',
})
export class RecipeUserComponent {
  private recipeService = inject(RecipeService);
  public authService = inject(AuthService);

  userRecipes = computed(() => {
    const user = this.authService.currentUser();
    const all = this.recipeService.recipies.value(); // Chiami il signal del service

    if (!user) return [];

    // Filtra le ricette in base all'id dell'utente loggato
    return all?.filter((recipe) => recipe.id_user === user.id);
  });

  constructor() {
    console.log('user recipes', this.userRecipes());
  }
}
