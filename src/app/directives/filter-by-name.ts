import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { RecipeService } from '../services/recipe-service';

@Directive({
  selector: '[appFilterByName]',
})
export class FilterByName {
  private templateRef = inject(TemplateRef<unknown>);
  private viewContainer = inject(ViewContainerRef);
  private recipeService = inject(RecipeService);

  appFilterByName = input('');

  constructor() {
    effect(() => {
      const recipeName = this.appFilterByName().toLowerCase();
      const searchValue = this.recipeService.searchValue().trim().toLowerCase();

      this.viewContainer.clear();

      if (!searchValue || recipeName.includes(searchValue)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    });
  }}
