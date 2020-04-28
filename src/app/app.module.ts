import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BoldDirective } from './directive/bold.directive';
import { BoldHostDirective } from './directive/bold-host.directive';

@NgModule({
	imports: [ BrowserModule ],
	declarations: [ AppComponent, BoldDirective, BoldHostDirective ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
