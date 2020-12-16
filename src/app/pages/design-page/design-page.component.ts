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
  @ViewChild('overlay') overlay; // used to darken background behind sidenav
  entryRows = DesignEntryRows;

  constructor() { }

  ngOnInit(): void {
  }

  viewEntry(contentKey): void {
    this.sidenav.open().then();
    document.body.classList.add('prevent-scrolling');
    this.overlay.nativeElement.classList.add('show');
  }

  closeEntry(): void {
    this.sidenav.close().then();
    document.body.classList.remove('prevent-scrolling');
    this.overlay.nativeElement.classList.remove('show');
  }

}
