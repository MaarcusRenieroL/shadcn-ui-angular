import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './global/base/button/button.component';
import { CardModule } from './global/base/card/card.module';
import { CardComponent } from './global/base/card/card/card.component';
import { CardContentComponent } from './global/base/card/card-content/card-content.component';
import { CardDescriptionComponent } from './global/base/card/card-description/card-description.component';
import { CardFooterComponent } from './global/base/card/card-footer/card-footer.component';
import { CardHeaderComponent } from './global/base/card/card-header/card-header.component';
import { CardTitleComponent } from './global/base/card/card-title/card-title.component';
import { InputComponent } from './global/base/input/input.component';
import { BadgeComponent } from './global/base/badge/badge.component';
import { AvatarModule } from './global/base/avatar/avatar.module';
import { AvatarComponent } from './global/base/avatar/avatar/avatar.component';
import { AvatarFallbackComponent } from './global/base/avatar/avatar-fallback/avatar-fallback.component';
import { AvatarImageComponent } from './global/base/avatar/avatar-image/avatar-image.component';

@NgModule({
  declarations: [ButtonComponent, InputComponent, BadgeComponent],
  imports: [CommonModule, CardModule, AvatarModule],
  exports: [
    ButtonComponent,
    CardComponent,
    CardContentComponent,
    CardDescriptionComponent,
    CardFooterComponent,
    CardHeaderComponent,
    CardTitleComponent,
    InputComponent,
    BadgeComponent,
    AvatarComponent,
    AvatarFallbackComponent,
    AvatarImageComponent,
  ],
})
export class ComponentsModule {}
