import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Start1Component } from './start1.component';

describe('Start1Component', () => {
  let component: Start1Component;
  let fixture: ComponentFixture<Start1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Start1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Start1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
