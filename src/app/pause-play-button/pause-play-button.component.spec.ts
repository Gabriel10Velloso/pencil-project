import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PausePlayButtonComponent } from './pause-play-button.component';

describe('PausePlayButtonComponent', () => {
  let component: PausePlayButtonComponent;
  let fixture: ComponentFixture<PausePlayButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PausePlayButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PausePlayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
