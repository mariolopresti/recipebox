import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe-service';
import { NgClass } from '@angular/common';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-recipe-detail-component',
  imports: [RouterLink, NgClass],
  templateUrl: './recipe-detail-component.html',
  styleUrl: './recipe-detail-component.css',
})
export class RecipeDetailComponent {
  route = inject(ActivatedRoute);
  recipeService = inject(RecipeService);
  authService = inject(AuthService);
  router = inject(Router); // Inietta il Router

  recipe = computed(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.recipeService.getRecipeById(id) ?? null;
  });

  onDelete() {
    const currentRecipe = this.recipe();
    if (!currentRecipe) return;

    if (confirm(`Sei sicuro di voler eliminare "${currentRecipe.nome}"?`)) {
      this.recipeService.deleteRecipe(currentRecipe).subscribe({
        next: () => {
          console.log('Ricetta eliminata');
          this.recipeService.recipies.reload();
          this.router.navigate(['/']);
        },
        error: () => alert("Errore durante l'eliminazione"),
      });
    }
  }

  onEdit() {
    const currentRecipe = this.recipe();
    if (!currentRecipe) return;
    this.router.navigate(['/recipe-form', currentRecipe.id]);
  }
}
