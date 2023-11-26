import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordCounterComponent } from './word-counter.component';

describe('WordCounterComponent', () => {
  let component: WordCounterComponent;
  let fixture: ComponentFixture<WordCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordCounterComponent]
    });

    fixture = TestBed.createComponent(WordCounterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should count words properly', () => {
  //   const fileContent = 'Hello world. Hello again.';
  //   component.fileContent = fileContent;
  //   component.countWords();

  //   const expectedOccurrences = { Hello: 2, 'world.': 1, 'again.': 1 };
  //   expect(component.wordOccurrences).toEqual(expectedOccurrences);
  // });

  // it('should handle empty file content', () => {
  //   component.fileContent = '';
  //   component.countWords();

  //   expect(component.wordOccurrences).toEqual({});
  // });

  // it('should handle file content with no spaces', () => {
  //   component.fileContent = 'SingleWord';
  //   component.countWords();

  //   expect(component.wordOccurrences).toEqual({ SingleWord: 1 });
  // });
});
