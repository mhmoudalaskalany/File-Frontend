import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared/shared.module';
import { BaseSharedModule } from 'shared/sub-modules/base-shared/base-shared.module';
import { FileProcessorRoutingModule } from './file-processor-routing.module';
import { FileProcessorComponent } from './pages/file-processor-component/file-processor.component';
import { WordCounterComponent } from './components/word-counter-component/word-counter.component';

@NgModule({
  declarations: [FileProcessorComponent, WordCounterComponent],
  imports: [CommonModule, FileProcessorRoutingModule, SharedModule, BaseSharedModule]
})
export class FileProcessorModule {}
