import { Routes } from '@angular/router';
import { RecipeComponent } from './component/recipe-component/recipe-component';
import { RecipeDetailComponent } from './component/recipe-detail-component/recipe-detail-component';
import { RecipeFormComponent } from './component/recipe-form-component/recipe-form-component';
import { LoginComponent } from './component/login-component/login-component';

export const routes: Routes = [
  { path: '', component: RecipeComponent },
  { path: 'recipes/:id', component: RecipeDetailComponent },
  { path: 'recipe-form', component: RecipeFormComponent },
  { path: 'login', component: LoginComponent },
];
