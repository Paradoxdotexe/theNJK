import { Component, OnInit, ViewChild } from '@angular/core';
import { DesignEntries, DesignEntryRows } from '../../design';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-design-page',
  templateUrl: './design-page.component.html',
  styleUrls: ['./design-page.component.scss']
})
export class DesignPageComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  entryRows = DesignEntryRows;

  constructor() { }

  ngOnInit(): void {
  }

  viewEntry(contentKey): void {
    this.sidenav.open().then();
    document.body.classList.add('prevent-scrolling');
  }

  closeEntry(): void {
    this.sidenav.close().then();
    document.body.classList.remove('prevent-scrolling');
  }

}
