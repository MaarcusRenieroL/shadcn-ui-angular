import { Component } from '@angular/core';

@Component({
  selector: 'ui-dialog-header',
  template: `<div class="flex flex-col text-center sm:text-left">
    <ng-content></ng-content>
  </div>`,
})
export class DialogHeaderComponent {}
