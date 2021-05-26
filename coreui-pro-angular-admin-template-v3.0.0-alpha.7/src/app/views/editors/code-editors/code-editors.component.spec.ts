import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeEditorsComponent } from './code-editors.component';

describe('CodeEditorsComponent', () => {
  let component: CodeEditorsComponent;
  let fixture: ComponentFixture<CodeEditorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeEditorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeEditorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
