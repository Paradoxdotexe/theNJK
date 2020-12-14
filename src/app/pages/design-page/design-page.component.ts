import { Component, OnInit } from '@angular/core';
import { DesignEntryRows } from '../../design';

@Component({
  selector: 'app-design-page',
  templateUrl: './design-page.component.html',
  styleUrls: ['./design-page.component.scss']
})
export class DesignPageComponent implements OnInit {
  entryRows = DesignEntryRows;

  constructor() { }

  ngOnInit(): void {
  }

}
