import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ui-avatar-image',
  template: `
    <img [src]="src" alt="Avatar Image" class="aspect-square h-10 w-10 object-cover" [ngClass]="className">
  `
})
export class AvatarImageComponent implements AfterViewInit {
  @Input() className?: string;
  @Input() src!: string;

  ngAfterViewInit() {
    // You can add any custom logic here if needed
  }
}
