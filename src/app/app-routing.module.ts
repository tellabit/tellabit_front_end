import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { SupportUsComponent } from './support-us/support-us.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'team',
        component: TeamComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'support-us',
        component: SupportUsComponent,
    },
    {
        path: 'resources',
        component: ResourcesComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
