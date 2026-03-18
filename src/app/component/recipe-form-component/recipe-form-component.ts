import { Component, computed, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Recipe } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe-service';
import { AuthService } from '../../services/auth-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-form-component',
  imports: [FormsModule],
  templateUrl: './recipe-form-component.html',
  styleUrl: './recipe-form-component.css',
})
export class RecipeFormComponent {
  private router = inject(Router);
  route = inject(ActivatedRoute);
  recipeService = inject(RecipeService);
  authService = inject(AuthService);

  id = Number(this.route.snapshot.paramMap.get('id'));
  recipe: Recipe = {
    nome: '',
    ingredienti: '',
    tempoPreparazione: 0,
    difficolta: '',
    immagine: '',
    descrizione: '',
    preparazione: '',
  };

  constructor() {
    const foundRecipe = this.recipeService.getRecipeById(this.id);
    if (foundRecipe) {
      this.recipe = foundRecipe;
    }
  }

  submitted: boolean = false;

  onSubmit(regForm: NgForm): void {
    //this.recipeService.addRecipe(regForm.value);
    //this.submitted = true;
    const userId = this.authService.currentUser()?.id;

    const newRecipe: Recipe = {
      ...regForm.value,
      id: this.id,
      id_user: userId, // Aggiungiamo l'id dell'utente loggato
    };

    // id = 0 significa che non abbiamo il parametro id nel url, quindi voglio aggiungere una ricetta
    if (this.id === 0) {
      this.recipeService.postRecipe(newRecipe).subscribe({
        next: (data) => {
          console.log('Ricetta aggiunta con successo:', data);
          this.submitted = true;
          this.recipeService.recipies.reload();
          this.router.navigate(['/recipe-user']);
        },
        error: (err) => {
          console.error("Errore nell'aggiunta ricetta", err);
        },
      });
    } else {
      this.recipeService.editRecipe(newRecipe).subscribe({
        next: (data) => {
          console.log('Ricetta modifica con successo:', data);
          this.submitted = true;
          this.router.navigate([`/recipes/${this.id}`]);
        },
        error: (err) => {
          console.error('Errore nella modifica della ricetta', err);
        },
      });
    }
  }
}
