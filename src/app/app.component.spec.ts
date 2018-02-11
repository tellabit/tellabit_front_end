import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

describe('AppComponent', () => {
    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [AppComponent, NavBarComponent],
                imports: [RouterTestingModule],
            }).compileComponents();
        }),
    );
    it(
        'should create the app',
        async(() => {
            const fixture = TestBed.createComponent(AppComponent);
            const app = fixture.debugElement.componentInstance;
            expect(app).toBeTruthy();
        }),
    );
});
