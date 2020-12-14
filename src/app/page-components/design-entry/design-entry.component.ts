import { Component, OnInit, Input } from '@angular/core';

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
  @Input() entry: Entry;
  contentPath;

  constructor() { }

  ngOnInit(): void {
    this.contentPath = 'assets/content/design/' + this.entry.contentKey + '_';
  }

}
