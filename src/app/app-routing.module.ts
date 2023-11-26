import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/core/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'file-processor',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'file-processor', pathMatch: 'full' },
      {
        path: 'file-processor',
        children: [
          {
            path: '',
            loadChildren: () => import('./modules/features/file-processor/file-processor.module').then(m => m.FileProcessorModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
