import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingPlaygroundComponent } from './playground.component';

describe('BindingPlaygroundComponent', () => {
  let component: BindingPlaygroundComponent;
  let fixture: ComponentFixture<BindingPlaygroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingPlaygroundComponent]
    });
    fixture = TestBed.createComponent(BindingPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
