import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveContainerComponent } from './responsive-container.component';

describe('ResponsiveContainerComponent', () => {
  let component: ResponsiveContainerComponent;
  let fixture: ComponentFixture<ResponsiveContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
