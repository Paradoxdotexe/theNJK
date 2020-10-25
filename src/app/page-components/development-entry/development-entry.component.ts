import { Component, OnInit, Input } from '@angular/core';

interface Entry {
  title: string;
  subtitle: string;
  color: string;
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

  constructor() { }

  ngOnInit(): void {
  }

}
