import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynctableComponent } from './synctable.component';

describe('SynctableComponent', () => {
  let component: SynctableComponent;
  let fixture: ComponentFixture<SynctableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynctableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynctableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
