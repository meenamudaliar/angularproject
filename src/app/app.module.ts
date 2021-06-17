import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './counter/counter.reducers';
import { RouterModule } from '@angular/router';
import {ReviewComponent} from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    CounterComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
