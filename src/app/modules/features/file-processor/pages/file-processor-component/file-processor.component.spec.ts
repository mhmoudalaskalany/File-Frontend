import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FileProcessorComponent } from './file-processor.component';
import { AlertService } from 'core/services/alert/alert.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

describe('FileProcessorComponent', () => {
  let component: FileProcessorComponent;
  let fixture: ComponentFixture<FileProcessorComponent>;
  let activatedRoute: ActivatedRoute;
  let alertServiceSpy: jasmine.SpyObj<AlertService>;
  beforeEach(() => {
    alertServiceSpy = jasmine.createSpyObj('AlertService', ['error']);
    TestBed.configureTestingModule({
      declarations: [FileProcessorComponent],
      imports: [RouterTestingModule, TranslateModule.forRoot()],
      providers: [
        { provide: AlertService, useValue: alertServiceSpy },
      ]
    });

    fixture = TestBed.createComponent(FileProcessorComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.snapshot.data = { pageTitle: 'File Processor' };
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the page title', () => {
    fixture.detectChanges();
    expect(component.pageTitle).toBe('File Processor');
  });

  it('should handle invalid file format', fakeAsync(() => {
    const invalidFile = new File(['Invalid file'], 'invalid-file.txt', { type: 'application/octet-stream' });
    const event = { target: { files: { item: () => invalidFile, length: 1 } } };
  
    component.readFile(event);
    tick();
  
    expect(component.content).toBe('');
    expect(alertServiceSpy.error).toHaveBeenCalledWith('Invalid file format');
  }));

  it('should read valid file and update word occurrences', async () => {
    const validFile = new File(['Hello, this is a test file.'], 'test-file.txt', { type: 'text/plain' });
    const event = { target: { files: { item: () => validFile, length: 1 } } };

    await component.readFile(event);
    fixture.detectChanges();
    expect(component.content).toBe('Hello, this is a test file.');
  });
});


