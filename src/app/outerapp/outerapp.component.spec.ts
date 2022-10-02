import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterappComponent } from './outerapp.component';

describe('OuterappComponent', () => {
  let component: OuterappComponent;
  let fixture: ComponentFixture<OuterappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuterappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuterappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
