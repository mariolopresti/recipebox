import { Component, inject } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe-service';

@Component({
  selector: 'app-recipe-component',
  imports: [RouterLink],
  templateUrl: './recipe-component.html',
  styleUrl: './recipe-component.css',
})
export class RecipeComponent {
   recipeService = inject(RecipeService);
   recipes = this.recipeService.recipies;
}
