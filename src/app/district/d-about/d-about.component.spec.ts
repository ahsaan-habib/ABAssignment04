import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAboutComponent } from './d-about.component';

describe('DAboutComponent', () => {
  let component: DAboutComponent;
  let fixture: ComponentFixture<DAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
