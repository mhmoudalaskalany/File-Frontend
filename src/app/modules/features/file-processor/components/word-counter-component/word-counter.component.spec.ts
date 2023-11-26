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

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should count words properly', () => {
    component.fileContent = 'This is a test';
    component.countWords();
    expect(component.wordOccurrences).toEqual({
      This: 1,
      a: 1,
      is: 1,
      test: 1
    });
  });
});
