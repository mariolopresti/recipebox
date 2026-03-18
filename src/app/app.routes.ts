import { Routes } from '@angular/router';
import { RecipeComponent } from './component/recipe-component/recipe-component';
import { RecipeDetailComponent } from './component/recipe-detail-component/recipe-detail-component';
import { RecipeFormComponent } from './component/recipe-form-component/recipe-form-component';
import { LoginComponent } from './component/login-component/login-component';
import { authGuard } from './auth.guard';
import { RecipeUserComponent } from './component/recipe-user-component/recipe-user-component';

export const routes: Routes = [
  { path: '', component: RecipeComponent },
  { path: 'recipes/:id', component: RecipeDetailComponent },
  { path: 'recipe-form', component: RecipeFormComponent, canActivate: [authGuard] },
  { path: 'recipe-form/:id', component: RecipeFormComponent, canActivate: [authGuard] },
  { path: 'recipe-user', component: RecipeUserComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
];
