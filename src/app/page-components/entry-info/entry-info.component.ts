import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entry-info',
  templateUrl: './entry-info.component.html',
  styleUrls: ['./entry-info.component.scss']
})
export class EntryInfoComponent implements OnInit {
  @Input() header;
  @Input() content;
  @Input() spaced = false;
  isArray = false;

  constructor() { }

  ngOnInit(): void {
    this.isArray = Array.isArray(this.content);
  }

}
