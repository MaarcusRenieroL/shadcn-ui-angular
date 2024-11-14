import { Component } from '@angular/core';

@Component({
  selector: 'ui-dropdown-menu-group',
  template: `
    <div class="dropdown-group">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .dropdown-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  `]
})
export class DropdownGroupComponent {}