import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaqModule } from './faq/faq.module';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TeamModule } from './team/team.module';

@NgModule({
    declarations: [AppComponent, NavBarComponent, FooterComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        Ng2PageScrollModule,
        HomeModule,
        TeamModule,
        FaqModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
