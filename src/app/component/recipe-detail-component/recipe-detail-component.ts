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
    console.log('ciao', currentRecipe);
    if (!currentRecipe) return;
    else {
      this.recipeService.deleteRecipe(currentRecipe).subscribe({
        next: () => {
          console.log('Ricetta eliminata');
          // Ricarichiamo la risorsa globale
          this.recipeService.recipies.reload();
          // Torniamo alla home o alla lista ricette
          this.router.navigate(['/']);
        },
        error: (err) => alert("Errore durante l'eliminazione"),
      });
    }
  }
}
