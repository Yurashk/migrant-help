import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { ContactDialogComponent } from './contact-dialog.component';


@Component({
  selector: 'app-feedback-fab',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    TranslateModule
  ],
  templateUrl: './feedback-fab.html',
  styleUrl: './feedback-fab.scss'
})
export class FeedbackFabComponent {
  private dialog = inject(MatDialog);

  openContactDialog(): void {
    this.dialog.open(ContactDialogComponent, {
      width: '550px',
      maxWidth: '95vw',
      autoFocus: true,
      disableClose: false,
      panelClass: 'contact-dialog-panel'
    });
  }
}
