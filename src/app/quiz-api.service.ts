import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuizApiService {

  constructor(private http: HttpClient) {

  }
  getQuiz(): Observable<Object> {
    return this.http.get('assets/data/questions.json')
  }
  get(): Observable<Object> {
    return this.http.get('assets/data/review.json')
  }
}
