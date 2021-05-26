import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBarSimpleComponent } from './chart-bar-simple.component';

describe('ChartBarSimpleComponent', () => {
  let component: ChartBarSimpleComponent;
  let fixture: ComponentFixture<ChartBarSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChartBarSimpleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBarSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
