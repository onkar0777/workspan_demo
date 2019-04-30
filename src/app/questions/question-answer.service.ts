import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../..//environments/environment';
import { map } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { Question } from './question';
import { Answer } from './answer';

@Injectable({
  providedIn: 'root'
})
export class QuestionAnswerService {

  constructor(private http: HttpClient) { }

  getAllQuestions(): Observable<Question[]> {
    return this.http.get(environment.feed.questions).pipe(
      map((x: any) => x.feed_questions)
    );
  }

  getAllAnswers(): Observable<Answer[]> {
    return this.http.get(environment.feed.answers).pipe(
      map((x: any) => x.feed_answers)
    );
  }

  // Returns an observable with all the questions and answers as one single array.
  getAllQuestionAnswers(): Promise<[Question[], Answer[]]> {
    return forkJoin(this.getAllQuestions(), this.getAllAnswers()).toPromise();
  }

  // Input is the id of the question needed. Returns the question with answers.
  async getQuestionWithId(id: string): Promise<Question> {
    const arr = await this.getAllQuestionAnswers();
    const question = arr[0].filter(x => x.Id === id)[0];
    question.answers = arr[1].filter(y => y['Question-Id'] === id);
    return question;
  }
}
