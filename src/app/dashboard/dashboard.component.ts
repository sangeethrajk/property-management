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
    { name: 'Name', separator: ':', value: 'J. Rosy' },
    { name: 'Contact No', separator: ':', value: '+91 9442308310' },
    { name: 'Father / Spouse No.', separator: ':', value: '+91 987654321' },
    { name: 'Email ID', separator: ':', value: 'rosy@gmail.com' },
    { name: 'Aadhaar No', separator: ':', value: '3918 6834 5610' },
    // { name: 'Driving License No.', separator: ':', value: 'TN102014587963' }
  ];

  isVisibilityColumnVisible(name: string): boolean {
    return name === 'Aadhaar No' || name === 'Driving License No.';
  }

}

