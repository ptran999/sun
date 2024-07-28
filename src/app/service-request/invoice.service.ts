import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  createInvoice(invoiceData: any) {
    return this.http.post('/api/invoices/', invoiceData)
  }

  getInvoice(id: string) {
    return this.http.get(`/api/invoices/${id}/invoice`)
  }
}
