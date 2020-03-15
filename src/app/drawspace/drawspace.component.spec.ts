import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawspaceComponent } from './drawspace.component';

describe('DrawspaceComponent', () => {
  let component: DrawspaceComponent;
  let fixture: ComponentFixture<DrawspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
