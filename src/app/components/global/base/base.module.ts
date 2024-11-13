import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { BadgeComponent } from './badge/badge.component';
import { AvatarModule } from './avatar/avatar.module';
import { CardModule } from './card/card.module';

@NgModule({
  declarations: [ButtonComponent, InputComponent, BadgeComponent],
  imports: [CommonModule, AvatarModule, CardModule],
  exports: [
    ButtonComponent,
    InputComponent,
    BadgeComponent,
    CardModule,
    AvatarModule,
  ],
})
export class BaseModule {}
