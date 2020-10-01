import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLinkComponent } from './full-link.component';

describe('FullLinkComponent', () => {
  let component: FullLinkComponent;
  let fixture: ComponentFixture<FullLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
