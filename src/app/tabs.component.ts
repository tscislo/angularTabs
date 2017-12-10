import {Component, OnInit, ContentChildren, QueryList} from '@angular/core';
import {TabComponent} from './tab.component';

@Component({
  selector: 'tabs',
  template: `
    <ul>
      <li *ngFor="let tab of tabs" 
          (click)="activate(tab)">{{tab.title}}</li>
    </ul>

    <ng-content></ng-content>
  `,
  styles  : []
})
export class TabsComponent  {

  @ContentChildren(TabComponent)
  public tabs: QueryList<TabComponent>;

  activate(tab: TabComponent) {
      this.tabs.forEach((tab) => tab.deactivate());
      tab.activate()
  }


}
