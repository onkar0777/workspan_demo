import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionComponent } from './questions/question/question.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'questions' },
  { path: 'questions', component: QuestionListComponent },
  { path: 'questions/:id', component: QuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
