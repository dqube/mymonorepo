import { async, TestBed } from '@angular/core/testing';
import { CommonCoreModule } from './common-core.module';

describe('CommonCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonCoreModule).toBeDefined();
  });
});
