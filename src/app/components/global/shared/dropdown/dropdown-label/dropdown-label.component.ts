import { Component } from '@angular/core';

@Component({
  selector: 'ui-dropdown-label',
  template: `<div class="px-2 py-1.5 text-sm font-semibold"><ng-content></ng-content></div>`,
})
export class DropdownLabelComponent {}