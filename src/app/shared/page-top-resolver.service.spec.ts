import { inject, TestBed } from '@angular/core/testing';

import { PageTopResolverService } from './page-top-resolver.service';

describe('PageTopResolverService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PageTopResolverService],
        });
    });

    it(
        'should be created',
        inject([PageTopResolverService], (service: PageTopResolverService) => {
            expect(service).toBeTruthy();
        }),
    );
});
