import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CommonComponentsModule } from './../../commom/common.module';

import { RegFormComponent } from './reg-form/reg-form.component';
import { RegReviewComponent } from './reg-review/reg-review.component';
import { RegConfirmationComponent } from './reg-confirmation/reg-confirmation.component';
import { RegistrationRouting } from './registration-routing.module';
import { RegistrationService } from './services/registration.service';
import { RegPwdSetupComponent } from './reg-pwd-setup/reg-pwd-setup.component';

@NgModule({
  imports: [
    CommonModule, RegistrationRouting, FormsModule, CommonComponentsModule
  ],
  declarations: [RegFormComponent, RegReviewComponent, RegConfirmationComponent, RegPwdSetupComponent],
  providers:[RegistrationService]
})
export class RegistrationModule { }
