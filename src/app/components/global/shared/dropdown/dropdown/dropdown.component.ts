import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-dropdown-menu',
  template: `<div (click)="$event.stopPropagation()" [class]="classes"><ng-content></ng-content></div>`,
  styles: [`
    .dropdown-menu {
      position: relative;
      display: inline-block;
    }
  `]
})
export class DropdownComponent {
  @Input() classes: string = 'dropdown-menu';
}