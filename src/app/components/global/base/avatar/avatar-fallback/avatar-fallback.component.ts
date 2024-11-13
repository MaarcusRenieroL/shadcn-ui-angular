import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ui-avatar-fallback',
  template: `
    <div class="flex h-10 w-10 items-center justify-center rounded-full bg-muted" [ngClass]="className">
      <span>{{ text }}</span>
    </div>
  `
})
export class AvatarFallbackComponent implements AfterViewInit {
  @Input() className?: string;
  @Input() text: string = '';

  ngAfterViewInit() {
    // Custom logic if needed
  }
}
