import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { RegFormComponent } from './reg-form/reg-form.component';
import { RegReviewComponent } from './reg-review/reg-review.component';
import { RegConfirmationComponent } from './reg-confirmation/reg-confirmation.component';

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
    }
];

@NgModule({
    imports: [RouterModule.forChild(regRoutes)]
})
export class RegistrationRouting {

}