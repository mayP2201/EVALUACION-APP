import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakeGradePage } from './make-grade.page';

describe('MakeGradePage', () => {
  let component: MakeGradePage;
  let fixture: ComponentFixture<MakeGradePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MakeGradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}
