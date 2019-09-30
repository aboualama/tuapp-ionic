import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedservicePage } from './bookedservice.page';

describe('BookedservicePage', () => {
  let component: BookedservicePage;
  let fixture: ComponentFixture<BookedservicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedservicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedservicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
