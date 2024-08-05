import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UraiaComponent } from './uraia.component';

describe('UraiaComponent', () => {
  let component: UraiaComponent;
  let fixture: ComponentFixture<UraiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UraiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UraiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
