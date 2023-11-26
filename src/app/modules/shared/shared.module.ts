import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// -------- Modules --------
// NgSelect Module
import { NgSelectModule } from '@ng-select/ng-select';
// TableModule
import { TableModule } from 'primeng/table';

// Pipes
import { ValidationHandlerPipe } from './pipes/validation-handler.pipe';

// Components
import { InputTextComponent } from './components/input-text/input-text.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { BaseSharedModule } from './sub-modules/base-shared/base-shared.module';

const COMPONENTS = [InputTextComponent, DropdownComponent, CheckboxComponent];

@NgModule({
  declarations: [
    // Components
    ...COMPONENTS,

    // Pipes
    ValidationHandlerPipe
  ],
  imports: [CommonModule, BaseSharedModule, NgSelectModule, TableModule],
  exports: [
    // Components
    ...COMPONENTS
  ]
})
export class SharedModule {}
