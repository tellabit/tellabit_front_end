import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { HomeComponent } from './home.component';

@NgModule({
    imports: [CommonModule, NgxPageScrollModule],
    declarations: [HomeComponent],
})
export class HomeModule {}
