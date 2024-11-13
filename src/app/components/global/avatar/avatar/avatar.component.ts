import { Component, Input, ContentChild, AfterViewInit } from '@angular/core';
import { AvatarImageComponent } from '../avatar-image/avatar-image.component';
import { AvatarFallbackComponent } from '../avatar-fallback/avatar-fallback.component';

@Component({
  selector: 'ui-avatar',
  template: `
    <div class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full" [ngClass]="className">
      <ng-content></ng-content>
    </div>
  `
})
export class AvatarComponent implements AfterViewInit {
  @Input() className?: string;

  @ContentChild(AvatarImageComponent) avatarImage!: AvatarImageComponent;
  @ContentChild(AvatarFallbackComponent) avatarFallback!: AvatarFallbackComponent;

  ngAfterViewInit() {
    // You can use className for additional customization
  }
}
