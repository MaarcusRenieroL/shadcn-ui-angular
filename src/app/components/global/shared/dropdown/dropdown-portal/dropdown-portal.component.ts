import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';

@Component({
  selector: 'ui-dropdown-portal',
  template: `<ng-template #portalContainer></ng-template>`,
})
export class DropdownPortalComponent implements OnInit {
  @ViewChild('portalContainer', { read: ViewContainerRef }) portalContainer!: ViewContainerRef;

  ngOnInit() {
  }
}
