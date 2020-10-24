import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.scss']
})
export class PortfolioHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() caption: string;

  constructor() { }

  ngOnInit(): void {
  }

}
