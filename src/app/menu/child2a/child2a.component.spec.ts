import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2aComponent } from './child2a.component';

describe('Child2aComponent', () => {
  let component: Child2aComponent;
  let fixture: ComponentFixture<Child2aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child2aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child2aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
