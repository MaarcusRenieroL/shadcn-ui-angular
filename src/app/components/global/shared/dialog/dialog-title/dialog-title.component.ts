import { Component } from '@angular/core';

@Component({
  selector: 'ui-dialog-title',
  template: `<h2 class="text-lg font-semibold"><ng-content></ng-content></h2>`,
})
export class DialogTitleComponent {}
