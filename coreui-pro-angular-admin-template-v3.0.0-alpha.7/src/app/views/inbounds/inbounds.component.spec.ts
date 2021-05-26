import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundsComponent } from './inbounds.component';

describe('InboundsComponent', () => {
  let component: InboundsComponent;
  let fixture: ComponentFixture<InboundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
