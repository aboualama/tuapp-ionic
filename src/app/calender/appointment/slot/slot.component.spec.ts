import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotComponent } from './slot.component';

describe('SlotComponent', () => {
  let component: SlotComponent;
  let fixture: ComponentFixture<SlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
