import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBasicPage } from './modal-basic.page';

describe('ModalBasicPage', () => {
  let component: ModalBasicPage;
  let fixture: ComponentFixture<ModalBasicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBasicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBasicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
