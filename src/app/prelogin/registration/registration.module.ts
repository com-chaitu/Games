import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegFormComponent } from './reg-form/reg-form.component';
import { RegReviewComponent } from './reg-review/reg-review.component';
import { RegConfirmationComponent } from './reg-confirmation/reg-confirmation.component';
import { RegistrationRouting } from './registration-routing.module';
import { RegProgressBarComponent } from './reg-progress-bar/reg-progress-bar.component';
import { RegistrationService } from './services/registration.service';

@NgModule({
  imports: [
    CommonModule, RegistrationRouting, FormsModule
  ],
  declarations: [RegFormComponent, RegReviewComponent, RegConfirmationComponent, RegProgressBarComponent],
  providers:[RegistrationService]
})
export class RegistrationModule { }
