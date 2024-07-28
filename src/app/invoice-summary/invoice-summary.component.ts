/**
 * Title: invoice-summary.component.ts
 * Author: Brock Hemsouvanh
 * Date: 07/21/2024
 * Description: Invoice Summary component logic for BCRS application
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../service-request/order';
//import { FormBuilder } from '@angular/forms';
import { InvoiceService } from '../service-request/invoice.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-invoice-summary',
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['./invoice-summary.component.css']
})
export class InvoiceSummaryComponent {

  order: Order; 
  isLoading: boolean;
  id: string; 
  errorMessage: string; 


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private invoiceService: InvoiceService,
    private cookieService: CookieService) {


    this.order = {} as Order; 
    this.isLoading = true;
    this.id = this.route.snapshot.queryParamMap.get('id') ??''; 
    this.errorMessage = '';


    console.log('this.id before ngOnInit:',this.id)
    }

    ngOnInit() {
     
      this.invoiceService.getInvoice(this.id).subscribe({
        next: (invoice: any) => {
         
          this.isLoading = false;
        },
        error: (err) => {
          if (err.status === 404) {
            this.errorMessage = `Invoice #${this.id} does not exist in our records. Please try again or contact customer service.`
          }
       
          console.error('Could not get invoice! Please try again.', err)
        }, complete: () => {
          this.isLoading =false
      }
    });
      }
    
      printInvoice() {
        window.print();
      }

    }