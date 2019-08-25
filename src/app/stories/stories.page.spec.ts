import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesPage } from './stories.page';

describe('StoriesPage', () => {
  let component: StoriesPage;
  let fixture: ComponentFixture<StoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
