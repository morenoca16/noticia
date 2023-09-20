import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormacionPage } from './formacion.page';

describe('FormacionPage', () => {
  let component: FormacionPage;
  let fixture: ComponentFixture<FormacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
