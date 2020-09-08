import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-next-page-button',
  templateUrl: './next-page-button.component.html',
  styleUrls: ['./next-page-button.component.scss']
})
export class NextPageButtonComponent implements OnInit {

  @Input() btnText: string;
  @Input() btnUrl: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
