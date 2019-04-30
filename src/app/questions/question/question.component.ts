import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionAnswerService } from '../question-answer.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AnswerDialogComponent } from '../answer-dialog/answer-dialog.component';
import { formatDate } from '@angular/common';
import { Question } from '../question';
import { BaseEntity } from '../base-entity';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question; // The question which is being inputted or fetched. This is shown on the view
  dataAvailable = false; // To show that data is being loaded. User should not see blank screen.

  constructor(
    private route: ActivatedRoute,
    private qaService: QuestionAnswerService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.dataAvailable = false;
    if (!this.question && this.route.snapshot.params.id) {
      this.getQuestionWithId(this.route.snapshot.params.id);
    } else {
      this.sortAnswersByDate();
      this.dataAvailable = true;
    }
  }

  // Set component question by fetching with id
  async getQuestionWithId(id: string) {
    this.question = await this.qaService.getQuestionWithId(id);
    this.sortAnswersByDate();
    this.dataAvailable = true;
  }

  // Sorting initial data to show latest answers on top
  sortAnswersByDate() {
    this.question.answers.sort((a, b) => {
      if ((new Date(a.created_at)) < (new Date(b.created_at))) {
        return 1;
      } else if ((new Date(a.created_at)) > (new Date(b.created_at))) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  openNewAnswerDialog(): void {
    const dialogRef = this.dialog.open(AnswerDialogComponent, {
      width: '70%',
      data: { questionId: this.question.Id, answer: { created_by: {} } }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.Answer) {
        result['Question-Id'] = this.question.Id;
        result.created_at = formatDate(new Date(), 'dd/MMM/yy HH:mm', 'en-US');
        this.question.answers.unshift(result);
      }
    });
  }

  // upvote either the Question or the Answer
  upvoteEntity(entity: BaseEntity) {
    if (entity.alreadyVoted === 'up') {
      return this.snackBar.open('Already Up Voted', null, { duration: 1000 });
    } else if (entity.alreadyVoted === 'down') {
      entity.downvotes--;
    }
    if (entity.upvotes) {
      entity.upvotes++;
    } else {
      entity.upvotes = 1;
    }
    entity.alreadyVoted = 'up';
  }

  // downvote either the Question or the Answer  
  downvoteEntity(entity: BaseEntity) {
    if (entity.alreadyVoted === 'down') {
      return this.snackBar.open('Already Down Voted', null, { duration: 1000 });
    } else if (entity.alreadyVoted === 'up') {
      entity.upvotes--;
    }
    if (entity.downvotes) {
      entity.downvotes++;
    } else {
      entity.downvotes = 1;
    }
    entity.alreadyVoted = 'down';
  }
}
