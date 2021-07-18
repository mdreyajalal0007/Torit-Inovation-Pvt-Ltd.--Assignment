import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorzoiComponent } from './borzoi.component';

describe('BorzoiComponent', () => {
  let component: BorzoiComponent;
  let fixture: ComponentFixture<BorzoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorzoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorzoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
