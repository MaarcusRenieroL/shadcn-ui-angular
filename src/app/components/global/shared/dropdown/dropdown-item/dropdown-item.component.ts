import { Component } from '@angular/core';

@Component({
  selector: 'ui-dropdown-menu-item',
  template: `
    <div class="flex items-center gap-2 px-2 py-1.5 rounded-sm text-sm cursor-pointer hover:bg-gray-200">
      <ng-content></ng-content>
    </div>
  `,
})
export class DropdownItemComponent {}