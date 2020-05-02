import { async, TestBed } from '@angular/core/testing';
import { FormTableModule } from './form-table.module';

describe('FormTableModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormTableModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FormTableModule).toBeDefined();
  });
});
