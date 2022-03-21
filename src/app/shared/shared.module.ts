import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromptComponent } from './components/prompt/prompt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentInjectionDirective } from './directives/component.injection.directive';

@NgModule({
    declarations: [ PromptComponent, ComponentInjectionDirective ],
    imports: [ CommonModule, ReactiveFormsModule, FormsModule, ],
    exports: [ PromptComponent, ComponentInjectionDirective ],
    providers: [],
})
export class SharedModule {}