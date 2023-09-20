import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoordinacionPage } from './coordinacion.page';

describe('CoordinacionPage', () => {
  let component: CoordinacionPage;
  let fixture: ComponentFixture<CoordinacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoordinacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
