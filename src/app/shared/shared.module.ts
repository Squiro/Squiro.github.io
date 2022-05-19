import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PromptComponent } from './components/prompt/prompt.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { ComponentInjectionDirective } from './directives/component.injection.directive';

@NgModule({
    declarations: [ PromptComponent, ComponentInjectionDirective, SplashScreenComponent ],
    imports: [ CommonModule, ReactiveFormsModule, FormsModule, RouterModule ],
    exports: [ PromptComponent, ComponentInjectionDirective, SplashScreenComponent ],
    providers: [],
})
export class SharedModule {}