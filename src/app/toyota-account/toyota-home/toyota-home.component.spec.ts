import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyotaHomeComponent } from './toyota-home.component';

describe('ToyotaHomeComponent', () => {
  let component: ToyotaHomeComponent;
  let fixture: ComponentFixture<ToyotaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToyotaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyotaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
