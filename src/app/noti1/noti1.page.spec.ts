import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Noti1Page } from './noti1.page';

describe('Noti1Page', () => {
  let component: Noti1Page;
  let fixture: ComponentFixture<Noti1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Noti1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
