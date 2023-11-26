import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FileProcessorComponent } from './file-processor.component';
import { AlertService } from 'core/services/alert/alert.service';
import { ActivatedRoute } from '@angular/router';

describe('FileProcessorComponent', () => {
  let component: FileProcessorComponent;
  let fixture: ComponentFixture<FileProcessorComponent>;
  let alertServiceSpy: jasmine.SpyObj<AlertService>;

  beforeEach(() => {
    alertServiceSpy = jasmine.createSpyObj('AlertService', ['error']);

    TestBed.configureTestingModule({
      declarations: [FileProcessorComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { data: { pageTitle: 'Test Page' } } } },
        { provide: AlertService, useValue: alertServiceSpy }
      ]
    });

    fixture = TestBed.createComponent(FileProcessorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set pageTitle on ngOnInit', () => {
    component.ngOnInit();
    expect(component.pageTitle).toBe('Test Page');
  });

  fit('should read a valid file', fakeAsync(() => {
    const fileContent = 'Hello, this is a test file.';
    const file = new File([fileContent], 'test-file.txt', { type: 'text/plain' });
    const event = { target: { files: { item: () => file, length: 1 } } };
    debugger;
    component.readFile(event);
    tick();
    fixture.detectChanges(); // Detect changes to update the view

    expect(component.content).toBe(fileContent);
    expect(alertServiceSpy.error).not.toHaveBeenCalled();
  }));

  it('should handle invalid file type', fakeAsync(() => {
    const event = { target: { files: { item: () => ({ type: 'application/pdf' }), length: 1 } } };

    component.readFile(event);
    tick(); // simulate the asynchronous file reading

    expect(component.content).toBe('');
    expect(alertServiceSpy.error).toHaveBeenCalledOnceWith('invalid file format');
  }));
});
