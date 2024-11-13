import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-breadcrumb-page',
  template: `
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      class="font-normal text-foreground"
      [ngClass]="className"
    >
      <ng-content></ng-content>
    </span>
  `,
  styles: [],
})
export class BreadcrumbPageComponent {
  @Input() className: string = '';
}
