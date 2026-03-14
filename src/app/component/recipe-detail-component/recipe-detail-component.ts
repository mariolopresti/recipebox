import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe-service';

@Component({
  selector: 'app-recipe-detail-component',
  imports: [RouterLink],
  templateUrl: './recipe-detail-component.html',
  styleUrl: './recipe-detail-component.css',
})
export class RecipeDetailComponent {
  route = inject(ActivatedRoute);
  recipeService = inject(RecipeService);

  recipe = computed(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.recipeService.getRecipeById(id) ?? null;
  });
}
