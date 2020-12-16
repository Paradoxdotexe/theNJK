import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DesignEntries } from '../../design';

interface Entry {
  contentKey: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-design-entry',
  templateUrl: './design-entry.component.html',
  styleUrls: ['./design-entry.component.scss']
})
export class DesignEntryComponent implements OnInit {
  @Output() clickEvent = new EventEmitter<string>();
  @Input() entryKey: string;
  entries = DesignEntries;
  entry: Entry;;
  contentPath;

  constructor() { }

  ngOnInit(): void {
    this.entry = this.entries[this.entryKey];
    this.contentPath = 'assets/content/design/' + this.entry.contentKey + '_';
  }

  onClick(): void {
    this.clickEvent.emit(this.entry.contentKey);
  }

}
