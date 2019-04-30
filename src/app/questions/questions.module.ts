import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionComponent } from './question/question.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { AnswerDialogComponent } from './answer-dialog/answer-dialog.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    QuestionListComponent,
    QuestionComponent,
    AnswerDialogComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatChipsModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  entryComponents: [AnswerDialogComponent]
})
export class QuestionsModule { }
