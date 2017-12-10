import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>The Tabs</h1>

      <tabs>


          <ng-template tab [title]="'tab 1'">
              <p>1</p>
          </ng-template>

          <ng-template tab [title]="'tab 2'">
              <p>2</p>
          </ng-template>

          <ng-template tab [title]="'tab 3'">
              <sample></sample>
          </ng-template>


      </tabs>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
