import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shell } from 'base/components/shell';
import { AlertService } from 'core/services/alert/alert.service';

@Component({
  selector: 'app-file-processor',
  templateUrl: './file-processor.component.html',
  styleUrls: ['./file-processor.component.scss']
})
export class FileProcessorComponent implements OnInit {
  pageTitle = '';
  content: string = '';
  get alertService(): AlertService {
    return Shell.Injector.get(AlertService);
  }

  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.pageTitle = this.activatedRoute.snapshot.data['pageTitle'];
  }

  readFile = (event: any) => {
    const file = event.target.files.item(0);
    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = e => {
        this.content = e.target?.result as string;
      };
      reader.readAsText(file);
    } else {
      this.alertService.error('invalid file format');
    }
  };
}
