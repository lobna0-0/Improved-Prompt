import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PromptService } from '../prompt.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  idea = '';
  result='';

  constructor(private promptService: PromptService) { }

  improvedIdea(){
    this.promptService.improvedPrompt(this.idea).subscribe((res)=>{
      this.result = res.improvedPrompt;
    })
  }

  copy(){
    navigator.clipboard.writeText(this.result);
  }
}
