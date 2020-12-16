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
  entries = DesignEntries;
  entry = this.entries.njk; // viewed entry

  contentPath;  // path to entry content based on contentKey
  contentIndices; // [0, 1, 2, ...contentCount], used to generate list of entry images

  constructor() { }

  ngOnInit(): void {
  }

  viewEntry(entryKey): void {
    this.entry = this.entries[entryKey];
    this.contentPath = 'assets/content/design/' + this.entry.contentKey + '_';
    this.contentIndices = Array(this.entry.contentCount).fill(0).map((x, i) => i);

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
