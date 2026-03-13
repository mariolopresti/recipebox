import { Routes } from '@angular/router';
import { RecipeComponent } from './component/recipe-component/recipe-component';
import { RecipeDetailComponent } from './component/recipe-detail-component/recipe-detail-component';

export const routes: Routes = [
  { path: '', component: RecipeComponent, },
  {
    path: 'recipes/:id', component: RecipeDetailComponent,
  },
];
