import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[tab]',
})
export class TabComponent  {

  @Input() title: string;

  constructor(private template: TemplateRef<any>,
              private entry: ViewContainerRef) {
  }

  activate() {
    this.entry.createEmbeddedView(this.template);
  }

  deactivate() {
    this.entry.clear();
  }


}
