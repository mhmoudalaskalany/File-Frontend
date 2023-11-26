import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileProcessorComponent } from './pages/file-processor-component/file-processor.component';

const routes: Routes = [
  {
    path: '',
    data: { pageTitle: 'FILE-PROCESSOR.PROCESS-FILE' },
    component: FileProcessorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileProcessorRoutingModule {}
