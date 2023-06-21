import { Component } from '@angular/core';

export interface PaymentTable {
  total_amount: number;
  paid_amount: number;
  pending_amount: number;
  repayment_period: number;
  penal_interest: number;
}

export interface PaymentTable1 {
  s_no: number;
  date: string;
  scheme: string;
  details: string;
  period: string;
  due_by: string;
  amount: number;
  penalty: number;
  total: number;
  pay: any;
}

const PAYMENT_DATA: PaymentTable[] = [
  { total_amount: 1500000, paid_amount: 33000, pending_amount: 33000, repayment_period: 33000, penal_interest: 33000 },
];

const PAYMENT_DATA1: PaymentTable1[] = [
  { s_no: 1, date: '01/01/2023', scheme: 'Scheme 1', details: 'Rent', period: '2 month', due_by: '15/01/2023', amount: 10000, penalty: 1000, total: 11000, pay: 'PAY' },
  { s_no: 2, date: '01/01/2023', scheme: 'Scheme 1', details: 'Rent', period: '2 month', due_by: '15/01/2023', amount: 10000, penalty: 1000, total: 11000, pay: 'VIEW' },
  { s_no: 3, date: '01/01/2023', scheme: 'Scheme 1', details: 'Rent', period: '2 month', due_by: '15/01/2023', amount: 10000, penalty: 1000, total: 11000, pay: 'VIEW' }
];

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent {

  displayedColumns: string[] = ['total_amount', 'paid_amount', 'pending_amount', 'repayment_period', 'penal_interest'];
  dataSource = PAYMENT_DATA;

  displayedColumns1: string[] = ['s_no', 'date', 'scheme', 'details', 'period', 'due_by', 'amount', 'penalty', 'total', 'pay'];
  dataSource1 = PAYMENT_DATA1;

}
