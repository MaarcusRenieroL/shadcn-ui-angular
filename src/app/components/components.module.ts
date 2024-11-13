import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './global/button/button.component';
import { CardModule } from './global/card/card.module';
import { CardComponent } from './global/card/card/card.component';
import { CardContentComponent } from './global/card/card-content/card-content.component';
import { CardDescriptionComponent } from './global/card/card-description/card-description.component';
import { CardFooterComponent } from './global/card/card-footer/card-footer.component';
import { CardHeaderComponent } from './global/card/card-header/card-header.component';
import { CardTitleComponent } from './global/card/card-title/card-title.component';
import { InputComponent } from './global/input/input.component';
import { BadgeComponent } from './global/badge/badge.component';

@NgModule({
  declarations: [ButtonComponent, InputComponent, BadgeComponent],
  imports: [CommonModule, CardModule],
  exports: [
    ButtonComponent,
    CardComponent,
    CardContentComponent,
    CardDescriptionComponent,
    CardFooterComponent,
    CardHeaderComponent,
    CardTitleComponent,
    InputComponent,
    BadgeComponent
  ],
})
export class ComponentsModule {}
