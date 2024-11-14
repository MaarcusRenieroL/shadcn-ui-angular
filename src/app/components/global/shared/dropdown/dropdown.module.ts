import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownTriggerComponent } from './dropdown-trigger/dropdown-trigger.component';
import { DropdownContentComponent } from './dropdown-content/dropdown-content.component';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';
import { DropdownCheckboxItemComponent } from './dropdown-checkbox-item/dropdown-checkbox-item.component';
import { DropdownRadioItemComponent } from './dropdown-radio-item/dropdown-radio-item.component';
import { DropdownLabelComponent } from './dropdown-label/dropdown-label.component';
import { DropdownSeparatorComponent } from './dropdown-separator/dropdown-separator.component';
import { DropdownShortcutComponent } from './dropdown-shortcut/dropdown-shortcut.component';
import { DropdownGroupComponent } from './dropdown-group/dropdown-group.component';
import { DropdownPortalComponent } from './dropdown-portal/dropdown-portal.component';
import { DropdownSubComponent } from './dropdown-sub/dropdown-sub.component';
import { DropdownSubContentComponent } from './dropdown-sub-content/dropdown-sub-content.component';
import { DropdownSubTriggerComponent } from './dropdown-sub-trigger/dropdown-sub-trigger.component';
import { BaseModule } from "../../base/base.module";

@NgModule({
  declarations: [
    DropdownComponent,
    DropdownTriggerComponent,
    DropdownContentComponent,
    DropdownItemComponent,
    DropdownCheckboxItemComponent,
    DropdownRadioItemComponent,
    DropdownLabelComponent,
    DropdownSeparatorComponent,
    DropdownShortcutComponent,
    DropdownGroupComponent,
    DropdownPortalComponent,
    DropdownSubComponent,
    DropdownSubContentComponent,
    DropdownSubTriggerComponent,
  ],
  imports: [CommonModule, BaseModule],
  exports: [
    DropdownComponent,
    DropdownTriggerComponent,
    DropdownContentComponent,
    DropdownItemComponent,
    DropdownCheckboxItemComponent,
    DropdownRadioItemComponent,
    DropdownLabelComponent,
    DropdownSeparatorComponent,
    DropdownShortcutComponent,
    DropdownGroupComponent,
    DropdownPortalComponent,
    DropdownSubComponent,
    DropdownSubContentComponent,
    DropdownSubTriggerComponent,
  ],
})

export class DropdownModule {}
