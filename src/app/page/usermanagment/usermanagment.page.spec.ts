import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagmentPage } from './usermanagment.page';

describe('UsermanagmentPage', () => {
  let component: UsermanagmentPage;
  let fixture: ComponentFixture<UsermanagmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermanagmentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanagmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
