import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChowComponent } from './chow.component';

describe('ChowComponent', () => {
  let component: ChowComponent;
  let fixture: ComponentFixture<ChowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
