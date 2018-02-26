import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaqModule } from './faq/faq.module';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ResourcesComponent } from './resources/resources.component';
import { SupportUsComponent } from './support-us/support-us.component';
import { TeamModule } from './team/team.module';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        AboutComponent,
        SupportUsComponent,
        ResourcesComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxPageScrollModule,
        HomeModule,
        TeamModule,
        FaqModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
