import { Component, OnInit } from '@angular/core';
import { QuizApiService } from '../quiz-api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  output=[];
  questions = [];
  review:any = [];
  answer = false;
  num = 0;
  points = 0;
  i=0;
  constructor(private api: QuizApiService) { }

  ngOnInit(): void {
    this.start();
    
  }
  checkAnswer(correct_answer: String, your_answer: String) {
    this.output.push(your_answer);
   console.log(this.output);
    this.answer = correct_answer == your_answer ? true : false;
    //this.answer ? this.points += 1 : this.points -= 1;
    if(this.answer==true)
    {
      this.points+=10;
    }
    this.num < this.questions.length ? this.num += 1 : null;
    
  }
  
 
      
  start() {
    this.questions = [];
    this.api.getQuiz().subscribe(async res => {
      let quiz = res['results'];
      quiz.forEach(element => {
        element.incorrect_answers.push(element.correct_answer);
        element.incorrect_answers.sort(() => .5 - Math.random());
      });
      this.questions = await quiz;
      this.num = 0;
      this.points = 0;
      this.output=[];
    });
  }
  getData(){
    this.review=[];
    this.api.get().subscribe((res)=>{
      this.review = res
      console.log(this.review)
    })
    
  }

  
}

