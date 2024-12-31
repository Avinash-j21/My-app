import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbpardComponent } from './dashbpard.component';

describe('DashbpardComponent', () => {
  let component: DashbpardComponent;
  let fixture: ComponentFixture<DashbpardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbpardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbpardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
