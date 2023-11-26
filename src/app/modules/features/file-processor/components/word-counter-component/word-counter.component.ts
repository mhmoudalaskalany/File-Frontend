import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-word-counter',
  templateUrl: './word-counter.component.html',
  styleUrls: ['./word-counter.component.scss']
})
export class WordCounterComponent {
  @Input() fileContent: string = '';
  wordOccurrences: any = {};

  countWords(): void {
    const words = this.fileContent.split(/\s+/);
    this.wordOccurrences = words.reduce((acc: any, word: string) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
  }
}
