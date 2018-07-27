import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePlotsComponent } from './price-plots.component';

describe('PricePlotsComponent', () => {
  let component: PricePlotsComponent;
  let fixture: ComponentFixture<PricePlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricePlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricePlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
