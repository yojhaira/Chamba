import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C404Template } from './c404.template';

describe('C404Template', () => {
  let component: C404Template;
  let fixture: ComponentFixture<C404Template>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C404Template ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C404Template);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
