import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TeamModule } from './team/team.module';

@NgModule({
    declarations: [AppComponent, NavBarComponent],
    imports: [BrowserModule, AppRoutingModule, HomeModule, TeamModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
