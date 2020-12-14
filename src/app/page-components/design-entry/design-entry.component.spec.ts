import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignEntryComponent } from './design-entry.component';

describe('DesignEntryComponent', () => {
  let component: DesignEntryComponent;
  let fixture: ComponentFixture<DesignEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
