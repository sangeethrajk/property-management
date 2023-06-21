import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface TableElement {
  name: string;
  separator: string;
  value: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  displayedColumns: string[] = ['name', 'separator', 'value', 'visibility'];

  dataSource: TableElement[] = [
    { name: 'Name', separator: ':', value: 'Hariharan' },
    { name: 'Contact No', separator: ':', value: '+91 987654321' },
    { name: 'Father / Spouse No.', separator: ':', value: '+91 987654321' },
    { name: 'Email ID', separator: ':', value: 'hari@gmail.com' },
    { name: 'Aadhaar No', separator: ':', value: '5896 7852 7895' },
    { name: 'Driving License No.', separator: ':', value: 'TN102014587963' }
  ];

  isVisibilityColumnVisible(name: string): boolean {
    return name === 'Aadhaar No' || name === 'Driving License No.';
  }

}

