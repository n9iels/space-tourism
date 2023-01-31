import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingButtonComponent } from './marketing-button.component';

describe('MarketingButtonComponent', () => {
  let component: MarketingButtonComponent;
  let fixture: ComponentFixture<MarketingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
