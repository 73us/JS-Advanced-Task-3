import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson03taskComponent } from './lesson03task.component';

describe('Lesson03taskComponent', () => {
  let component: Lesson03taskComponent;
  let fixture: ComponentFixture<Lesson03taskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lesson03taskComponent]
    });
    fixture = TestBed.createComponent(Lesson03taskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
