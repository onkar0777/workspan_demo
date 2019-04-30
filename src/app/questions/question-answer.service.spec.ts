import { TestBed } from '@angular/core/testing';

import { QuestionAnswerService } from './question-answer.service';
import { HttpClientModule } from '@angular/common/http';

describe('QuestionAnswerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: QuestionAnswerService = TestBed.get(QuestionAnswerService);
    expect(service).toBeTruthy();
  });
});
