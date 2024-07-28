import { Product } from "./product";

export class Order {
    menuItems: Array<Product>; //menuItems array of Product import
    id: number; // for the orderId
    email: string;
    firstName: string;
    lastName: string;
    date: string;
    parts: number;
    labor: number;
    orderTotal: number;
  
    constructor() {
      // initializing the variables and array
      this.menuItems = [];
      this.email = '';
      this.firstName = '';
      this.lastName = '';
      this.labor = 0;
      this.parts = 0;
      this.orderTotal = 0;
  
      // generate a random order number between 10000 and 99999
      this.id = Math.floor(Math.random() * 90000) + 10000;
  
      // get the current date
      this.date = new Date().toLocaleDateString()
  
    }
  
    
    getOrderTotal(){
      let total = 0; 
      let laborTotal = 0;
  
      for (let product of this.menuItems) {
        total += product.price; 
        laborTotal = this.labor * 50;
      } 
  
        console.log('Menu Items Total: ', total) 
        console.log('Labor Total:', laborTotal)
        total = total + laborTotal
  
  
        console.log('Total before parseFloat: ', total)
        console.log('Labor after parseFloat', laborTotal)
        total = total + parseFloat(this.parts.toString());
  
        console.log('Total after parts and labor: ', total)
  
        console.log('Total: ', total)
  
        return total.toFixed(2) 
  
    }
  }