import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronsComponent } from './jumbotrons.component';

describe('JumbotronsComponent', () => {
  let component: JumbotronsComponent;
  let fixture: ComponentFixture<JumbotronsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JumbotronsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
