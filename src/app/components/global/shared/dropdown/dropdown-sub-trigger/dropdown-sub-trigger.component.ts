import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-dropdown-menu-sub-trigger',
  template: `
    <button (click)="toggle.emit()" class="flex items-center justify-between w-full gap-2">
      <ng-content></ng-content>
      <svg class="ml-auto" width="12" height="12" viewBox="0 0 24 24">
        <path d="M9 6l6 6-6 6" />
      </svg>
    </button>
  `,
})
export class DropdownSubTriggerComponent {
  @Output() toggle = new EventEmitter<void>();
}