import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R1Component } from './r1.component';

describe('R1Component', () => {
  let component: R1Component;
  let fixture: ComponentFixture<R1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [R1Component]
    });
    fixture = TestBed.createComponent(R1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
