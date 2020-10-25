import { Component, OnInit, Input } from '@angular/core';

interface Entry {
  date: string;
  title: string;
  subtitle: string;
  color: string;
  contentKey: string;
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
  @Input() entry: Entry;
  @Input() index: number;
  even: boolean; // controls background color
  contentIndex = 1;

  constructor() { }

  ngOnInit(): void {
    this.even = this.index % 2 === 0;
  }

}
