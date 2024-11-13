import { NgModule } from '@angular/core';
import { BaseModule } from './global/base/base.module';
import { SharedModule } from './global/shared/shared.module';

@NgModule({
  imports: [BaseModule, SharedModule],
  exports: [BaseModule, SharedModule],
})
export class ComponentsModule {}
