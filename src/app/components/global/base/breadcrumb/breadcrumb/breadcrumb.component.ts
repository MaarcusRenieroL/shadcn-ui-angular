import { Component } from '@angular/core';

@Component({
  selector: 'ui-breadcrumb',
  template: `
    <nav
      [attr.aria-label]="'breadcrumb'"
      class="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
    >
      <ng-content></ng-content>
    </nav>
  `,
  styles: [],
})
export class BreadcrumbComponent {}
