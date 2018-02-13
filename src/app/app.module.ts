import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TeamModule } from './team/team.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [AppComponent, NavBarComponent, FooterComponent],
    imports: [BrowserModule, AppRoutingModule, HomeModule, TeamModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
