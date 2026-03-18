import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-difficulty-badge',
  standalone: true,
  templateUrl: './difficulty-badge.html',
  styleUrl: './difficulty-badge.css'
})
export class DifficultyBadgeComponent {

  level = input.required<string>();

  badgeClick = output<string>();

  onClick(event: MouseEvent) {
    event.stopPropagation();
    this.badgeClick.emit(this.level());
  }

}
