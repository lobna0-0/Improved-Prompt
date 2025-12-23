import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromptService {

  constructor(private http: HttpClient) { }

  improvedPrompt(idea: string){
    const URl = 'http://localhost:3000/improve';
    return this.http.post<any>(URl, {idea} );
  }
}
