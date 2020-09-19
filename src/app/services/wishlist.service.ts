import { Injectable } from '@angular/core';
import {HttpClient }   from '@angular/common/http';
import { map}          from 'rxjs/Operators';
import{ wishlistUrl } from '../../config/api';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }
  getWishlist(){
    return this.http.get(wishlistUrl).pipe(
      map((result:any[]) =>{
        let productIds = []
         return productIds;

         result.forEach(item =>productIds.push(item.id))
      })
    )

  }

  addToWishlist(productId){
    return this.http.post(wishlistUrl, { id: productId })

  }
  removeFormsWishlist(productId){
    return this.http.delete(wishlistUrl + '/' + productId);

  }
}
