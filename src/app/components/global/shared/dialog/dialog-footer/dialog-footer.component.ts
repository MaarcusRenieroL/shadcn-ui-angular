import { Component } from '@angular/core';

@Component({
  selector: 'ui-dialog-footer',
  template: `<div class="flex justify-end space-x-2">
    <ng-content></ng-content>
  </div>`,
})
export class DialogFooterComponent {}
