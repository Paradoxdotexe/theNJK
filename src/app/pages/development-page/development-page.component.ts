import { Component, ViewChildren } from '@angular/core';
import { DevelopmentEntries } from '../../development';
import { DevelopmentEntryComponent } from '../../page-components/development-entry/development-entry.component';

@Component({
  selector: 'app-development-page',
  templateUrl: './development-page.component.html',
  styleUrls: ['./development-page.component.scss']
})
export class DevelopmentPageComponent {
  @ViewChildren(DevelopmentEntryComponent) developmentEntries;
  entries = DevelopmentEntries;

  constructor() { }

}
