import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesStarterComponent } from './phones-starter.component';

describe('PhonesStarterComponent', () => {
  let component: PhonesStarterComponent;
  let fixture: ComponentFixture<PhonesStarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonesStarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonesStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
