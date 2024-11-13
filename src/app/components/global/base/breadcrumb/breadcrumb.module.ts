import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbListComponent } from './breadcrumb-list/breadcrumb-list.component';
import { BreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';
import { BreadcrumbLinkComponent } from './breadcrumb-link/breadcrumb-link.component';
import { BreadcrumbPageComponent } from './breadcrumb-page/breadcrumb-page.component';
import { BreadcrumbSeparatorComponent } from './breadcrumb-separator/breadcrumb-separator.component';
import { BreadcrumbEllipsisComponent } from './breadcrumb-ellipsis/breadcrumb-ellipsis.component';
import { heroChevronRight, heroUsers } from '@ng-icons/heroicons/outline';
import { matMoreHorizOutline } from '@ng-icons/material-icons/outline';
import { NgIconsModule } from '@ng-icons/core';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    BreadcrumbListComponent,
    BreadcrumbItemComponent,
    BreadcrumbLinkComponent,
    BreadcrumbPageComponent,
    BreadcrumbSeparatorComponent,
    BreadcrumbEllipsisComponent,
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      heroUsers,
      heroChevronRight,
      matMoreHorizOutline,
    }),
  ],
  exports: [
    BreadcrumbComponent,
    BreadcrumbListComponent,
    BreadcrumbItemComponent,
    BreadcrumbLinkComponent,
    BreadcrumbPageComponent,
    BreadcrumbSeparatorComponent,
    BreadcrumbEllipsisComponent,
  ],
})
export class BreadcrumbModule {}
