import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUpdationComponent } from './student-updation.component';

describe('StudentUpdationComponent', () => {
  let component: StudentUpdationComponent;
  let fixture: ComponentFixture<StudentUpdationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentUpdationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentUpdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
