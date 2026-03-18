import { inject, Injectable, signal } from '@angular/core';
import { Recipe } from '../interfaces/recipe';
import { HttpClient, httpResource } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  searchValue = signal('');
  selectedDifficulty = signal('Tutte');

  private http = inject(HttpClient); // ottiene istanza di HttpClient
  private apiUrl = 'http://localhost:8080/api/recipes';

  // GET: resource Signal-based, si ricarica chiamando .reload()
  recipies = httpResource<Recipe[]>(() => this.apiUrl);

  // GET: recupera lista di utenti
  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl).pipe(
      catchError((err) => {
        console.error('Errore nel recupero ricette', err);
        return throwError(() => new Error('Errore nel recupero delle ricette'));
      }),
    );
  }

  // POST: aggiunge una nuova ricetta al backend
  postRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl, recipe).pipe(
      catchError((err) => {
        console.error("Errore nell'aggiunta ricetta", err);
        return throwError(() => new Error("Errore nell'aggiunta della ricetta."));
      }),
    );
  }

  // DELETE: cancella una ricetta dal backend
  deleteRecipe(recipe: Recipe): Observable<void> {
    const url = `${this.apiUrl}/delete/${recipe.id}`;

    return this.http.delete<void>(url).pipe(
      catchError((err) => {
        console.error('Errore nella cancellazione ricetta', err);
        return throwError(() => new Error("Errore durante l'eliminazione della ricetta."));
      }),
    );
  }

  // EDIT: edit una ricetta dal backend
  editRecipe(recipe: Recipe): Observable<Recipe> {
    const url = `${this.apiUrl}/edit/${recipe.id}`;
    return this.http.patch<Recipe>(url, recipe).pipe(
      catchError((err) => {
        console.error('Errore nella modifica della ricetta', err);
        return throwError(() => new Error('Errore durante la modifica della ricetta.'));
      }),
    );
  }

  setSearchValue(value: string): void {
    this.searchValue.set(value);
  }

  setDifficultyValue(value: string): void {
    console.log('set difficulty value: ', value);
    this.selectedDifficulty.set(value);
  }

  getRecipeById(id: number): Recipe | undefined {
    return this.recipies.value()?.find((recipe) => recipe.id === id);
  }

}
