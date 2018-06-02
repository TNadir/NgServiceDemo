import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { SrcapitestComponent } from './srcapitest/srcapitest.component';
import { HomeComponent } from './home/home.component';
import { CradetailComponent } from "./cradetail/cradetail.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cars', component: SrcapitestComponent ,
    
    children:[
            { path: ':id/:name', component: CradetailComponent }
    ]},

];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})


export class AppRoutingModule {

}