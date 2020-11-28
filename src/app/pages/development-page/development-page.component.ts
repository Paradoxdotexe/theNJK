import { Component, ViewChildren, AfterViewInit } from '@angular/core';
import { DevelopmentEntries } from '../../development';
import { DevelopmentEntryComponent } from '../../page-components/development-entry/development-entry.component';

@Component({
  selector: 'app-development-page',
  templateUrl: './development-page.component.html',
  styleUrls: ['./development-page.component.scss']
})
export class DevelopmentPageComponent implements AfterViewInit {
  @ViewChildren(DevelopmentEntryComponent) developmentEntries;
  entries = DevelopmentEntries;

  // crappy automated scrolling variables
  /*
  currentEntry = 0;
  canScroll = true;
  scrolling = false;
   */

  constructor() { }

  ngAfterViewInit(): void {
    if (window.scrollY !== 0) {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }

  // crappy automated scrolling
  /*
  @HostListener('wheel', ['$event']) // for window scroll events
  onWheel(event): void {
    console.log(window.scrollY);
    if (!this.scrolling) {
      const nextScrollPosition = event.deltaY > 0 ? this.getScrollBottom() + event.deltaY : this.getScrollTop() + event.deltaY;
      const entryAfterScroll = this.getEntryAfterScroll(nextScrollPosition);
      if (entryAfterScroll !== this.currentEntry) {
        event.preventDefault();
        this.scrolling = true;
        console.log('autoscrolling...');
        this.currentEntry = entryAfterScroll;
        this.developmentEntries.toArray()[this.currentEntry].scrollTo();
        this.delay(1000).then(() => {
          this.scrolling = false;
        });
      }
    } else {
      event.preventDefault();
    }
  }

  getEntryAfterScroll(scrollPosition): number {
    for (const entry of this.developmentEntries) {
      if (scrollPosition > entry.getOffsetTop() && scrollPosition < entry.getOffsetBottom()) {
        return entry.index;
      }
    }
    return 0;
  }

  getScrollTop(): number {
    return window.scrollY;
  }

  getScrollBottom(): number {
    return window.scrollY + window.innerHeight;
  }

  // asynchronous time delay
  async delay(ms: number): Promise<null> {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  // increase number without going over the content count
  increase(n, x): number {
    return n === x ? x : n + 1;
  }

  // decrease number without going under 1
  decrease(n, x): number {
    return n === 0 ? x : n - 1;
  }
   */

}
