import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiElementPage } from './ui-element.page';

describe('UiElementPage', () => {
  let component: UiElementPage;
  let fixture: ComponentFixture<UiElementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiElementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiElementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
