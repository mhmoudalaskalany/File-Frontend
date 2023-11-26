import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// -------- Modules --------
// NgSelect Module
import { NgSelectModule } from '@ng-select/ng-select';

import { BaseSharedModule } from './sub-modules/base-shared/base-shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, BaseSharedModule, NgSelectModule],
  exports: [BaseSharedModule]
})
export class SharedModule {}
