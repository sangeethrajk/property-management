import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  documents: any[] = [
    { name: 'Document 1' },
    { name: 'Document 2' },
    { name: 'Document 3' }
  ];

}
