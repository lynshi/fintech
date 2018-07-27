import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSelectionFormComponent } from './stock-selection-form.component';

describe('StockSelectionFormComponent', () => {
  let component: StockSelectionFormComponent;
  let fixture: ComponentFixture<StockSelectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSelectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSelectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
