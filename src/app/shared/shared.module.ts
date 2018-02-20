import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageTopResolverService } from './page-top-resolver.service';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    providers: [PageTopResolverService],
})
export class SharedModule {}
