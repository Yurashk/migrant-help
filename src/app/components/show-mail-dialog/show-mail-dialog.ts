import { Component, ElementRef, inject, model, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogContent,
  MatDialogActions,
} from '@angular/material/dialog';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShowSnackBar } from '../show-snack-bar/show-snack-bar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-show-mail-dialog',
  imports: [
    CommonModule,
    FormsModule,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatInputModule,
    MatIcon,
    TranslateModule,
    ClipboardModule
  ],
  templateUrl: './show-mail-dialog.html',
  styleUrl: './show-mail-dialog.scss',
})
export class ShowMailDialog {
  @ViewChild('textArea') textArea!: ElementRef;
  private _snackBar = inject(MatSnackBar);
  readonly dialogRef = inject(MatDialogRef<ShowMailDialog>);
  data = inject<any>(MAT_DIALOG_DATA);
  readonly email = model(this.data.mail);
  copied = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(ShowSnackBar, {
      duration: 2000,
    });
  }

  copy() {
    // Only use clipboard API in browser environment
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    navigator.clipboard
      .writeText(this.email())
      .then(() => {
        this.openSnackBar();
        this.copied = true;
      })
      .catch((err) => {
        console.error('❌ Failed to copy:', err);
      });
  }
}
