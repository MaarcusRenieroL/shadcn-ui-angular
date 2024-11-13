import { Component, Input } from '@angular/core';

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';

@Component({
  selector: 'ui-badge',
  template: `<div
    [ngClass]="badgeClasses"
    [class]="className"
    [attr.role]="role"
  >
    <ng-content></ng-content>
  </div>`,
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'default';
  @Input() className: string = '';
  @Input() role: string = 'status';

  // Compute the badge classes based on the variant
  get badgeClasses() {
    const baseClasses =
      'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';

    const variantClasses = {
      default:
        'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
      secondary:
        'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
      destructive:
        'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
      outline:
        'border border-input text-foreground hover:bg-accent hover:text-accent-foreground',
    };

    return `${baseClasses} ${variantClasses[this.variant]} ${this.className}`;
  }
}
