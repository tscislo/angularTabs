import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';
import { SampleComponent } from './sample.component';

@NgModule({
    declarations: [AppComponent, TabsComponent, TabComponent, SampleComponent],
    imports     : [
        BrowserModule
    ],
    bootstrap   : [AppComponent]
})
export class AppModule {
}
