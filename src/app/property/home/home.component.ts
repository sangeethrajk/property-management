import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  dataSource: any[] = [];
  displayedColumns: string[] = ['name', 'separator', 'value'];

  constructor() {
    // Populate the dataSource array with your data
    this.dataSource = [
      { name: 'Scheme Type', separator: ':', value: '' },
      { name: 'Asset Category', separator: ':', value: '' },
      { name: 'Asset Sub-Category', separator: ':', value: '' },
      { name: 'Unit No', separator: ':', value: '' },
      { name: 'Block', separator: ':', value: '' },
      { name: 'Floor', separator: ':', value: '' },
      { name: 'Total Cost', separator: ':', value: '' },
      { name: 'Plinth Area(sq.ft.)', separator: ':', value: '' },
      { name: 'UDS Area(sq.ft.)', separator: ':', value: '' },
      { name: 'Plot Area(sq.ft.)', separator: ':', value: '' },
      { name: 'Carpet Area(sq.ft.)', separator: ':', value: '' },
      { name: 'Allotment Order No', separator: ':', value: '' },
      { name: 'Allotment Order Date', separator: ':', value: '' }
    ];
  }

}
