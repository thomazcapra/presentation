import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatStepperModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AcademicInfoComponent } from './components/academic-info/academic-info.component';
import { EmployementInfoComponent } from './components/employement-info/employement-info.component';


@NgModule({
    declarations: [
        AppComponent,
        AboutMeComponent,
        AcademicInfoComponent,
        EmployementInfoComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        MatStepperModule,
        MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
