import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-breadcrumb-list',
  template: `
    <ol
      class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5"
      [ngClass]="className"
    >
      <ng-content></ng-content>
    </ol>
  `,
  styles: [],
})
export class BreadcrumbListComponent {
  @Input() className: string = '';
}
