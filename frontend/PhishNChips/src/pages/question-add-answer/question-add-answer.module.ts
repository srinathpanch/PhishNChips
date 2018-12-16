import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionAddAnswerPage } from './question-add-answer';

@NgModule({
  declarations: [
    QuestionAddAnswerPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionAddAnswerPage),
  ],
})
export class QuestionAddAnswerPageModule {}
