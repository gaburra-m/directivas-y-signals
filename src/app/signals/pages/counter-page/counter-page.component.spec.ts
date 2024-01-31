import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPageComponent } from './counter-page.component';

describe('CounterPageComponent', () => {
  let component: CounterPageComponent;
  let fixture: ComponentFixture<CounterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterPageComponent]
    });
    fixture = TestBed.createComponent(CounterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
