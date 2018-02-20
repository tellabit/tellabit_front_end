import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PageScrollConfig } from 'ngx-page-scroll';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(router: Router) {
        PageScrollConfig.defaultScrollOffset = 50;
        PageScrollConfig.defaultEasingLogic = {
            ease: (t, b, c, d) => {
                // easeInOutExpo easing
                if (t === 0) {
                    return b;
                }

                if (t === d) {
                    return b + c;
                }

                if ((t /= d / 2) < 1) {
                    return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                }

                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            },
        };
        PageScrollConfig.defaultDuration = 500;

        router.events.subscribe((ev) => {
            if (ev instanceof NavigationEnd) {
                window.scrollTo(0, 0);
            }
        });
    }
}
