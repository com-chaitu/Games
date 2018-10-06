import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { PreloginComponent } from './prelogin.component';

const preloginRoutes: Route[] = [
    {
        path: '',
        component: PreloginComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(preloginRoutes)],
    exports: [RouterModule]
})
export class PreloginRouting {

}