import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-breadcrumb-item',
  template: `
    <li class="inline-flex items-center gap-1.5" [ngClass]="className">
      <ng-content></ng-content>
    </li>
  `,
  styles: [],
})
export class BreadcrumbItemComponent {
  @Input() className: string = '';
}
