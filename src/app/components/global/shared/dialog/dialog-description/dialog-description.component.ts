import { Component } from '@angular/core';

@Component({
  selector: 'ui-dialog-description',
  template: `<p class="text-sm text-gray-600"><ng-content></ng-content></p>`,
})
export class DialogDescriptionComponent {}
