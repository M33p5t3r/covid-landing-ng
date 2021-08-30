import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCountComponent } from './stats-count.component';

describe('StatsCountComponent', () => {
  let component: StatsCountComponent;
  let fixture: ComponentFixture<StatsCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
