import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatStepperModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PastComponent } from './components/past/past.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FutureComponent } from './components/future/future.component';
import { PresentComponent } from './components/present/present.component';


@NgModule({
    declarations: [
        AppComponent,
        AboutMeComponent,
        PastComponent,
        PresentComponent,
        FutureComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        MatIconModule,
        MatStepperModule,
        MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
