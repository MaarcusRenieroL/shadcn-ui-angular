import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { BadgeComponent } from './badge/badge.component';
import { AvatarModule } from './avatar/avatar.module';
import { CardModule } from './card/card.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [ButtonComponent, InputComponent, BadgeComponent],
  imports: [CommonModule, AvatarModule, CardModule, BreadcrumbModule],
  exports: [
    ButtonComponent,
    InputComponent,
    BadgeComponent,
    CardModule,
    AvatarModule,
    BreadcrumbModule,
  ],
})
export class BaseModule {}
