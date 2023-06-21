import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  documents: any[] = [
    { name: 'Document 1 - Allotment Order' },
    { name: 'Document 2 - LCS agreement' },
    { name: 'Document 3 - Handing over report' },
    { name: 'Document 4 - Field measurement book' },
    { name: 'Document 5 - A & B(Loan purposes)' },
    { name: 'Document 6 - Sale Deed' }
  ];
  documentForm!: FormGroup;

}
