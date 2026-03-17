import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Recipe } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe-service';

@Component({
  selector: 'app-recipe-form-component',
  imports: [FormsModule],
  templateUrl: './recipe-form-component.html',
  styleUrl: './recipe-form-component.css',
})
export class RecipeFormComponent {

  recipeService = inject(RecipeService);

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
    this.recipeService.addRecipe(regForm.value);
    this.submitted = true;
  }
}
