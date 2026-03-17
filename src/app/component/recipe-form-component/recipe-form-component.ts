import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Recipe } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe-service';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-form-component',
  imports: [FormsModule],
  templateUrl: './recipe-form-component.html',
  styleUrl: './recipe-form-component.css',
})
export class RecipeFormComponent {

  private router = inject(Router);
  recipeService = inject(RecipeService);
  authService = inject(AuthService);

  recipe = {
    id: 0,
    nome: '',
    ingredienti: '',
    tempoPreparazione: 0,
    difficolta: '',
    immagine: '',
    descrizione: '',
    preparazione: '',
  };

  submitted: boolean = false;

  onSubmit(regForm: NgForm): void {
    //this.recipeService.addRecipe(regForm.value);
    //this.submitted = true;
    const userId = this.authService.currentUser()?.id;

    const newRecipe: Recipe = {
      ...regForm.value,
      id_user: userId, // Aggiungiamo l'id dell'utente loggato
    };

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
  }
}
