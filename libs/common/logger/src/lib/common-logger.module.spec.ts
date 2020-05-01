import { async, TestBed } from '@angular/core/testing';
import { CommonLoggerModule } from './common-logger.module';

describe('CommonLoggerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonLoggerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonLoggerModule).toBeDefined();
  });
});
