import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'shadcn-ui-angular';

  imageSrc = 'https://github.com/shadcn.png';

  isDialogOpen = false;

  openDialog() {
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

  toggleDialog() {
    this.isDialogOpen = !this.isDialogOpen;
  }
}
