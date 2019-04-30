import { Component, OnInit } from '@angular/core';
import { QuestionAnswerService } from '../question-answer.service';
import { Question } from '../question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  feedQuestions: Question[]; // All Questions to be displayed on the view
  dataAvailable = false; // To show that data is being loaded. User should not see blank screen.

  constructor(private qaService: QuestionAnswerService) { }

  ngOnInit() {
    this.dataAvailable = false;
    this.getAllQuestionAnswers();
  }

  // Get All Questions and Answers from service and set the feedQuestions
  async getAllQuestionAnswers(): Promise<void> {
    const arr = await this.qaService.getAllQuestionAnswers();
    this.feedQuestions = arr[0];
    const answers = arr[1];
    this.feedQuestions.map((x: any) => {
      x.answers = answers.filter(y => y['Question-Id'] === x.Id);
    });
    this.dataAvailable = true;
  }


}
