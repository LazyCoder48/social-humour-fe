import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Meme {
  id: number;
  frontText: string;
  backText: string;
  isFlipped: boolean;
}

@Component({
  selector: 'app-memes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.scss']
})
export class MemesComponent implements OnInit {
  memes: Meme[] = [];

  constructor() { }

  ngOnInit(): void {
    // Generate random memes
    this.generateMemes();
  }

  generateMemes(): void {
    const socialHumorLabels = [
      'Social Humor',
      'Laugh Out Loud',
      'Internet Jokes',
      'Meme Culture',
      'Viral Humor',
      'Comedy Gold',
      'Digital Laughs',
      'Social Media Fun',
      'Internet Comedy',
      'Trending Jokes'
    ];

    const memeTexts = [
      'When you finally find the bug in your code after 5 hours',
      'That moment when your code works on the first try',
      'Me explaining my code to my rubber duck',
      'When someone asks if I tested my code before deploying',
      'My code in production vs my code in development',
      'When the client says "just one small change"',
      'Developers when they have to document their code',
      'When you forget a semicolon in JavaScript',
      'CSS: Move 1 pixel to the right. The entire website:',
      'When you\'re the only one who understands your code',
      'My brain during a coding interview',
      'When you fix one bug and create 10 more',
      'When your code works but you don\'t know why',
      'Trying to explain technical concepts to non-technical people',
      'When you accidentally push to production instead of staging'
    ];

    // Create 30 meme cards
    for (let i = 0; i < 30; i++) {
      const randomLabelIndex = Math.floor(Math.random() * socialHumorLabels.length);
      const randomMemeIndex = Math.floor(Math.random() * memeTexts.length);

      this.memes.push({
        id: i + 1,
        frontText: socialHumorLabels[randomLabelIndex],
        backText: memeTexts[randomMemeIndex],
        isFlipped: false
      });
    }
  }

  flipCard(meme: Meme): void {
    meme.isFlipped = !meme.isFlipped;
  }
}
