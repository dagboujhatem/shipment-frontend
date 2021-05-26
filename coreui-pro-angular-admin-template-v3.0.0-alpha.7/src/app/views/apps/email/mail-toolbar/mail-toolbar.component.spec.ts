import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailToolbarComponent } from './mail-toolbar.component';

describe('MailToolbarComponent', () => {
  let component: MailToolbarComponent;
  let fixture: ComponentFixture<MailToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MailToolbarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
