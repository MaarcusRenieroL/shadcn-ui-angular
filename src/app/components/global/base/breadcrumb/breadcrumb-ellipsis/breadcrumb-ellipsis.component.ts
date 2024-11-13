import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-breadcrumb-ellipsis',
  template: `
    <span
      role="presentation"
      aria-hidden="true"
      class="flex items-center justify-center"
      [ngClass]="className"
    >
      <ng-icon name="matMoreHorizOutline" class="h-4 w-4"></ng-icon>
      <span class="sr-only">More</span>
    </span>
  `,
})
export class BreadcrumbEllipsisComponent {
  @Input() className: string = '';
}
