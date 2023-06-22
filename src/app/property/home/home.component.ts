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
      { name: 'Scheme Type', separator: ':', value: 'SFS' },
      { name: 'Asset Category', separator: ':', value: 'Flat' },
      { name: 'Asset Sub-Category', separator: ':', value: 'HIG' },
      { name: 'Unit No', separator: ':', value: '208/2' },
      { name: 'Block', separator: ':', value: '1' },
      { name: 'Floor', separator: ':', value: '1' },
      { name: 'Total Cost', separator: ':', value: '97,52,000' },
      { name: 'Plinth Area(sq.ft.)', separator: ':', value: 'NA' },
      { name: 'UDS Area(sq.ft.)', separator: ':', value: '1002' },
      { name: 'Plot Area(sq.ft.)', separator: ':', value: '501' },
      { name: 'Carpet Area(sq.ft.)', separator: ':', value: 'NA' },
      { name: 'Allotment Order No', separator: ':', value: '1230' },
      { name: 'Allotment Order Date', separator: ':', value: '01/03/2023' }
    ];
  }

}
