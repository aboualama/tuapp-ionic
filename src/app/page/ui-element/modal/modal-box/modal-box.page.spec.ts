import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBoxPage } from './modal-box.page';

describe('ModalBoxPage', () => {
  let component: ModalBoxPage;
  let fixture: ComponentFixture<ModalBoxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBoxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBoxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
