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
  { total_amount: 9752000, paid_amount: 4500000, pending_amount: 5252000, repayment_period: 1, penal_interest: 0 },
];

const PAYMENT_DATA1: PaymentTable1[] = [
  { s_no: 1, date: '01/04/2023', scheme: '90 Flats(30 HIG & 60 MIG) at ANWe', details: 'installment', period: '1', due_by: '01/05/2023', amount: 5252000, penalty: 109418, total: 5361418, pay: 'PAY' }
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
