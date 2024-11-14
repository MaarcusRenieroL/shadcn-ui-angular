import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-dropdown-menu-sub-content',
  template: `
    <div *ngIf="isOpen" class="absolute left-full top-0 z-50 min-w-[8rem] p-1 bg-white shadow-md border rounded-md">
      <ng-content></ng-content>
    </div>
  `,
})
export class DropdownSubContentComponent {
  @Input() isOpen: boolean = false;
}