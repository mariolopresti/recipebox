import { Component, inject } from '@angular/core';
import { RecipeService } from '../../services/recipe-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-difficulty-filter',
  imports: [FormsModule],
  templateUrl: './difficulty-filter-component.html',
  styleUrl: './difficulty-filter-component.css',
})
export class DifficultyFilterComponent {
  recipeService = inject(RecipeService);

  difficulties = ['Tutte', 'Facile', 'Media', 'Difficile'];

  onDifficultyChange(value: string) {
    this.recipeService.setDifficultyValue(value);
  }
}
