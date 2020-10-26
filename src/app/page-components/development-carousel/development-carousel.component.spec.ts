import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentCarouselComponent } from './development-carousel.component';

describe('DevelopmentCarouselComponent', () => {
  let component: DevelopmentCarouselComponent;
  let fixture: ComponentFixture<DevelopmentCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopmentCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
