import { Component, OnInit, ViewChild } from '@angular/core';
import { DesignEntries, DesignEntryRows } from '../../design';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-design-page',
  templateUrl: './design-page.component.html',
  styleUrls: ['./design-page.component.scss']
})
export class DesignPageComponent implements OnInit {
  @ViewChild(MatSidenavContainer) sidenavContainer: MatSidenavContainer;
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  @ViewChild('overlay') overlay; // used to darken background behind sidenav
  entryRows = DesignEntryRows;
  entries = DesignEntries;
  entry = null; // viewed entry
  entryOpened = false; // if entry is fully open

  contentPath;  // path to entry content based on contentKey
  contentIndices; // [0, 1, 2, ...contentCount], used to generate list of entry images
  loaded = {}; // dictionary of whether content images have loaded

  constructor() { }

  ngOnInit(): void {
  }

  viewEntry(entryKey): void {
    this.entry = this.entries[entryKey];
    this.contentPath = 'assets/content/design/' + this.entry.contentKey + '_';
    this.contentIndices = Array(this.entry.contentCount).fill(0).map((x, i) => i + 1);

    this.sidenav.open().then(() => this.entryOpened = true);
    document.body.classList.add('prevent-scrolling');
    this.overlay.nativeElement.classList.add('show');
    this.overlay.nativeElement.classList.add('block');
  }

  closeEntry(): void {
    if (this.entryOpened) {
      this.sidenav.close().then(() => {
        this.entry = null;
        this.entryOpened = false;
      });
      document.body.classList.remove('prevent-scrolling');
      this.overlay.nativeElement.classList.remove('show');
      this.delay(600).then(() => {
        this.overlay.nativeElement.classList.remove('block');
      });
    }
  }

  // asynchronous time delay
  async delay(ms: number): Promise<null> {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
