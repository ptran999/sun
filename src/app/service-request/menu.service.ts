import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  products: Array<Product>

  constructor() {
    // initialize products array with Product objects
    this.products = [
      {
        id: 100,
        name: 'Password Reset',
        price: 39.99,
        checked: false

      },
      {
        id: 101,
        name: 'Spyware Removal',
        price: 99.99,
        checked: false
      },
      {
        id: 102,
        name: 'RAM Upgrade',
        price: 129.99,
        checked: false
      },
      {
        id: 103,
        name: 'Software Installation',
        price: 49.99,
        checked: false
      },
      {
        id: 104,
        name: 'PC Tune-up',
        price: 39.99,
        checked: false
      },
      {
        id: 105,
        name: 'Keyboard Cleaning',
        price: 39.99,
        checked: false
      },
      {
        id: 106,
        name: 'Disk Clean-up',
        price: 39.99,
        checked: false
      }
    ] 
   } 

   getProducts(): Array<Product> {
    return this.products; 
   }
}