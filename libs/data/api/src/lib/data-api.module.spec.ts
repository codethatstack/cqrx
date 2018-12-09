import { async, TestBed } from '@angular/core/testing';
import { DataApiModule } from './data-api.module';

describe('DataApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataApiModule).toBeDefined();
  });
});
