import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeComponent } from './component/recipe-component/recipe-component';
import { Header } from './component/header/header';
import { Footer } from './component/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecipeComponent, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('recipebox');
}
