import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  displayedColumns: string[] = ['category', 'number', 'size', 'documents', 'subCategory', 'block', 'rent', 'payments', 'type', 'floor'];

}
