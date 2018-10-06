import { Route, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'prelogin',
        pathMatch: 'full'
    },
    {
        path: 'prelogin',
        loadChildren: './prelogin/prelogin.module#PreloginModule'
    },
    {
        path: 'registration',
        loadChildren: './prelogin/registration/registration.module#RegistrationModule'
    },
    {
        path: 'test',
        component: AppComponent
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}