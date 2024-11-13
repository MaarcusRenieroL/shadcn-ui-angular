import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-breadcrumb-link',
  template: `
    <a
      [attr.href]="href"
      class="transition-colors hover:text-foreground"
      [ngClass]="className"
      [ngStyle]="{ display: asChild ? 'inline-block' : 'block' }"
    >
      <ng-content></ng-content>
    </a>
  `,
  styles: [],
})
export class BreadcrumbLinkComponent {
  @Input() href: string = '#';
  @Input() className: string = '';
  @Input() asChild: boolean = false;
}
