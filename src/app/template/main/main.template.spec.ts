import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTemplate } from './main.template';

describe('MainTemplate', () => {
  let component: MainTemplate;
  let fixture: ComponentFixture<MainTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
