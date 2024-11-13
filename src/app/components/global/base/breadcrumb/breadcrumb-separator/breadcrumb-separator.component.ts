import {
  Component,
  ContentChild,
  AfterContentInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'ui-breadcrumb-separator',
  template: `
    <li role="presentation" aria-hidden="true" [ngClass]="className">
      <ng-content *ngIf="hasContent; else defaultSeparator"></ng-content>
      <ng-template #defaultSeparator>
        <ng-icon name="heroChevronRight" class="text-black"></ng-icon>
      </ng-template>
    </li>
  `,
  styles: [],
})
export class BreadcrumbSeparatorComponent implements AfterContentInit {
  @ContentChild('separatorContent') separatorContent: any;
  hasContent = false;

  @Input() className: string = '';

  ngAfterContentInit() {
    this.hasContent = !!this.separatorContent;
  }
}
