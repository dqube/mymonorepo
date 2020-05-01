import { async, TestBed } from '@angular/core/testing';
import { CommonConfigModule } from './common-config.module';

describe('CommonConfigModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonConfigModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonConfigModule).toBeDefined();
  });
});
