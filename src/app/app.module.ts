import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { WatchshopComponent } from './watchshop/watchshop.component';

import { CartComponent } from './watchshop/cart/cart.component';
import { ProductListComponent } from './watchshop/product-list/product-list.component';
import { FiltersComponent } from './watchshop/filters/filters.component';
import { CartItemComponent } from './watchshop/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './watchshop/product-list/product-item/product-item.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    WatchshopComponent,
   
    CartComponent,
    ProductListComponent,
    FiltersComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    ShopComponent,
    PageNotFoundComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
