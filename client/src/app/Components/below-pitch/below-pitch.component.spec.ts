import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelowPitchComponent } from './below-pitch.component';

describe('BelowPitchComponent', () => {
  let component: BelowPitchComponent;
  let fixture: ComponentFixture<BelowPitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BelowPitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BelowPitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
