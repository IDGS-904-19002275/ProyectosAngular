import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosPuntosComponent } from './dos-puntos.component';

describe('DosPuntosComponent', () => {
  let component: DosPuntosComponent;
  let fixture: ComponentFixture<DosPuntosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DosPuntosComponent]
    });
    fixture = TestBed.createComponent(DosPuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
