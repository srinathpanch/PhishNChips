import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionCorrectAnswerPage } from './question-correct-answer';

@NgModule({
  declarations: [
    QuestionCorrectAnswerPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionCorrectAnswerPage),
  ],
})
export class QuestionCorrectAnswerPageModule {}
