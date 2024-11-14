import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-dropdown-menu-radio-item',
  template: `
    <div class="flex items-center gap-2 px-2 py-1.5 rounded-sm text-sm cursor-pointer hover:bg-gray-200">
      <input type="radio" [checked]="selected" (change)="selected = true" class="form-radio h-4 w-4" />
      <ng-content></ng-content>
    </div>
  `,
})
export class DropdownRadioItemComponent {
  @Input() selected: boolean = false;
}