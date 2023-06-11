import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditGradePage } from './edit-grade.page';

describe('EditGradePage', () => {
  let component: EditGradePage;
  let fixture: ComponentFixture<EditGradePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditGradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
