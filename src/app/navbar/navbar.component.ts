import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPdf() {
    const pdfUrl = './assets/Avraham Moshe Resume.pdf';
    const pdfName = 'Avraham Moshe Resume.pdf';
    //FileSaver.saveAs(pdfUrl, pdfName);
    window.open(pdfUrl, '_blank');
  }

}
