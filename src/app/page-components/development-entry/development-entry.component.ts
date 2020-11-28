import {Component, OnInit, Input, ViewChild} from '@angular/core';

interface Entry {
  date: string;
  title: string;
  subtitle: string;
  color: string;
  gradient: Array<string>; // optional gradient
  contentKey: string;
  video: boolean;
  contentCount: number;
  contentType: string;
  client: string;
  role: string;
  technologies: Array<string>;
  platform: string;
  work: string;
}

@Component({
  selector: 'app-development-entry',
  templateUrl: './development-entry.component.html',
  styleUrls: ['./development-entry.component.scss']
})
export class DevelopmentEntryComponent implements OnInit {
  @ViewChild('divEntry') divEntry;
  @Input() entry: Entry;
  @Input() index: number;
  even: boolean; // controls background color
  backgroundStyle;

  constructor() { }

  ngOnInit(): void {
    this.even = this.index % 2 === 0;

    if (this.entry.gradient) { // gradient
      this.backgroundStyle = 'backgroundImage: linear-gradient(to right, ' + this.entry.gradient[0] + ', ' + this.entry.gradient[1] + ')';
    } else { // solid color
      this.backgroundStyle = 'backgroundColor: ' + this.entry.color;
    }
  }

  isString(value): boolean {
    return typeof value === 'string';
  }

  // used for crappy automated scrolling
  /*
  public scrollTo(): void {
    setTimeout(() => {
      this.divEntry.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    });
  }

  public getOffsetTop(): number {
    return this.divEntry.nativeElement.offsetTop;
  }

  public getOffsetBottom(): number {
    return this.divEntry.nativeElement.offsetTop + this.divEntry.nativeElement.offsetHeight;
  }
   */

}
