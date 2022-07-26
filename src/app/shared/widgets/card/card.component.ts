import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() label!: string;
  @Input() total!: string;
  @Input() percentage!: string;
  @Input() data = [];

  chartOptions = {};

  constructor() { }

  ngOnInit() {
      setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
