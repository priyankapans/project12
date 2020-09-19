import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WatchshopComponent} from './watchshop/watchshop.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { PageNotFoundComponent} from'./page-not-found/page-not-found.component';


const routes: Routes = [
{path:'',redirectTo: '/shop', pathMatch:'full'},
{path: 'login' , component: LoginComponent},
{path: 'register',component: RegisterComponent},
{ path: 'shop',component: ShopComponent},
{ path: '**',component: PageNotFoundComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
