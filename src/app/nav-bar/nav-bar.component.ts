import { Component, Renderer, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
    public scrolled: boolean;

    constructor(renderer: Renderer2) {
        renderer.listen('window', 'scroll', () => {
            const scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
            this.scrolled = scrollTop > 60 ? true : false;
        });
    }
}
