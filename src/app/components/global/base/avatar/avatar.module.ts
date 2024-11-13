import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarFallbackComponent } from './avatar-fallback/avatar-fallback.component';
import { AvatarImageComponent } from './avatar-image/avatar-image.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  declarations: [
    AvatarComponent,
    AvatarImageComponent,
    AvatarFallbackComponent
  ],
  imports: [CommonModule],
  exports: [
    AvatarComponent,
    AvatarImageComponent,
    AvatarFallbackComponent
  ]
})
export class AvatarModule {}
