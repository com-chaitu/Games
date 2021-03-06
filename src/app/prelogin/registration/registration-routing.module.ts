import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { RegFormComponent } from './reg-form/reg-form.component';
import { RegReviewComponent } from './reg-review/reg-review.component';
import { RegConfirmationComponent } from './reg-confirmation/reg-confirmation.component';
import { RegPwdSetupComponent } from "./reg-pwd-setup/reg-pwd-setup.component";

const regRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'reg-form',
    },
    {
        path: 'reg-form',
        component: RegFormComponent
    },
    {
        path: 'reg-review',
        component: RegReviewComponent
    },
    {
        path: 'reg-pwd-setup',
        component: RegPwdSetupComponent
    },
    {
        path: 'reg-confirm',
        component: RegConfirmationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(regRoutes)],
    exports: [RouterModule]
})
export class RegistrationRouting {

}