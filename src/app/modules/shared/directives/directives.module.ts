import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IsEnglishDirective } from './is-english/is-english.directive';
import { RtlDirective } from './rtl/rtl.directive';
import { SpecificLanguageDirective } from './validators/specific-language/specific-language.directive';

const DIRECTIVES = [RtlDirective, IsEnglishDirective, SpecificLanguageDirective];

@NgModule({
  declarations: [...DIRECTIVES],
  imports: [CommonModule],
  exports: [...DIRECTIVES]
})
export class DirectivesModule {}
