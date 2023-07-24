import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftHomeComponent } from './gift-home.component';

describe('GiftHomeComponent', () => {
  let component: GiftHomeComponent;
  let fixture: ComponentFixture<GiftHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiftHomeComponent]
    });
    fixture = TestBed.createComponent(GiftHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
