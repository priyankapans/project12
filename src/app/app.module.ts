import { BrowserModule } from '@angular/platform-browser';
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
    ProductItemComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
