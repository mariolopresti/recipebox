import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeComponent } from './component/recipe-component/recipe-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecipeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('recipebox');
}
