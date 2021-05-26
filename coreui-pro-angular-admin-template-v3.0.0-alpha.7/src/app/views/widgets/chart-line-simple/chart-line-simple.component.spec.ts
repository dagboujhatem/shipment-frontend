import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLineSimpleComponent } from './chart-line-simple.component';

describe('ChartLineSimpleComponent', () => {
  let component: ChartLineSimpleComponent;
  let fixture: ComponentFixture<ChartLineSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChartLineSimpleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLineSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
