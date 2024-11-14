import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-dropdown-menu-content',
  template: `
    <div *ngIf="isOpen" class="absolute z-50 min-w-[8rem] rounded-md border bg-white p-1 shadow-md">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host { position: relative; }
  `]
})
export class DropdownContentComponent {
  @Input() isOpen: boolean = false;
}