import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-dropdown-menu-checkbox-item',
  template: `
    <div class="flex items-center gap-2 px-2 py-1.5 rounded-sm text-sm cursor-pointer hover:bg-gray-200">
      <input type="checkbox" [checked]="checked" (change)="checked = !checked" class="form-checkbox h-4 w-4" />
      <ng-content></ng-content>
    </div>
  `,
})
export class DropdownCheckboxItemComponent {
  @Input() checked: boolean = false;
}