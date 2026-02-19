import { Component, inject } from '@angular/core';
import {
  MatDialogRef,
  MatDialogContent,
  MatDialogActions,
  MatDialogTitle,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-dialog',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    TranslateModule
  ],
  templateUrl: './contact-dialog.component.html',
  styleUrl: './contact-dialog.component.scss'
})
export class ContactDialogComponent {
  private dialogRef = inject(MatDialogRef<ContactDialogComponent>);
  private fb = inject(FormBuilder);
  private recaptchaV3Service = inject(ReCaptchaV3Service);
  private snackBar = inject(MatSnackBar);
  private translate = inject(TranslateService);

  contactForm: FormGroup = this.fb.group({
    inquiryType: ['', Validators.required],
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(1000)]]
  });

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.recaptchaV3Service.execute('contact_form').subscribe({
        next: (token) => {
          const templateParams = {
            name: this.contactForm.value.name,
            email: this.contactForm.value.email,
            message: this.contactForm.value.message,
            title: this.contactForm.value.inquiryType,
            'g-recaptcha-response': token
          };

          emailjs.send(
            'service_1r7a3tw',
            'template_0k1geph',
            templateParams,
            'LkniMG2o_vCjuaskl'
          )
          .then(() => {
            this.snackBar.open(
              this.translate.instant('FEEDBACK.SUCCESS_MESSAGE'),
              this.translate.instant('FEEDBACK.CLOSE_BUTTON'),
              { duration: 5000, panelClass: ['success-snackbar'] }
            );
            this.dialogRef.close();
          })
          .catch((err) => {
            console.error('Error:', err);
            this.snackBar.open(
              this.translate.instant('FEEDBACK.ERROR_MESSAGE'),
              this.translate.instant('FEEDBACK.CLOSE_BUTTON'),
              { duration: 5000, panelClass: ['error-snackbar'] }
            );
          });
        },
        error: (err) => {
          console.error('Recaptcha error:', err);
          this.snackBar.open(
            this.translate.instant('FEEDBACK.ERROR_MESSAGE'),
            this.translate.instant('FEEDBACK.CLOSE_BUTTON'),
            { duration: 5000, panelClass: ['error-snackbar'] }
          );
        }
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  get inquiryType() { return this.contactForm.get('inquiryType'); }
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
}
