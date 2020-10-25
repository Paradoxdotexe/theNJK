import { Component, OnInit } from '@angular/core';
import { DevelopmentEntries } from '../../development';

@Component({
  selector: 'app-development-page',
  templateUrl: './development-page.component.html',
  styleUrls: ['./development-page.component.scss']
})
export class DevelopmentPageComponent implements OnInit {
 entries = DevelopmentEntries;

  constructor() { }

  ngOnInit(): void {
  }

}
