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
  constructor(private activatedRoute: ActivatedRoute, private alertService: AlertService) {}

  ngOnInit(): void {
    this.pageTitle = this.activatedRoute.snapshot.data['pageTitle'];
  }

  readFile = (event: any): Promise<string> => {
    return new Promise((resolve, reject) => {
      const file = event.target.files.item(0);
      if (!file || file.type !== 'text/plain') {
        this.alertService.error('Invalid file format');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        this.content = reader.result as string;
        resolve(this.content);
      };
      reader.onerror = () => {
        reject(new Error('Failed to read file'));
      };
      reader.readAsText(file);
    });
  };
}
