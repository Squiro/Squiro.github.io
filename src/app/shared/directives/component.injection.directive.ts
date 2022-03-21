import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[componentInjection]',
})
export class ComponentInjectionDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}