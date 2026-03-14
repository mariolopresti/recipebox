import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { RecipeService } from '../services/recipe-service';

@Directive({
  selector: '[appFilterDifficulty]',
})
export class FilterDifficulty {
  private templateRef = inject(TemplateRef<unknown>);
  private viewContainer = inject(ViewContainerRef);
  private recipeService = inject(RecipeService);

  appFilterDifficulty = input('');

  constructor() {
    effect(() => {
      const recipeDifficulty = this.appFilterDifficulty().toLowerCase();
      const selectedDifficulty = this.recipeService.selectedDifficulty().toLowerCase();

      this.viewContainer.clear();

      if (selectedDifficulty === 'tutte' || recipeDifficulty === selectedDifficulty) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    })
  }
}
