import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {

    let fixture;
    let app: AppComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserAnimationsModule
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(AppComponent);
        app = <AppComponent>fixture.debugElement.componentInstance;
    }));

    it('should create the app', async(() => {
        expect(app).toBeTruthy();
    }));

    it(`should have my personal data`, async(() => {
        expect(app.personalData.name).toEqual('Thomaz Capra');
        expect(app.personalData.age).toEqual(24);
        expect(app.personalData.degree).toEqual(`Bachelor's Degree - Computer Science`);
        expect(app.personalData.experience).toEqual('About 2 years');
    }));

    it(`should have changing message and its content should be valid`, async(() => {
        const changingMessage = app['changingMessage'];

        expect(changingMessage).not.toBeNull();
        expect(changingMessage.length).toEqual(2);
        expect(changingMessage[0]).toEqual('Software Developer');
        expect(changingMessage[1]).toEqual('BOLD International');
    }));

    it(`should call 'onResize' when window resize`, () => {
        let spyResize = spyOn(app, 'onResize');
        window.dispatchEvent(new Event('resize'));
        expect(spyResize).toHaveBeenCalled();
    });

    it(`should call 'onResize' when window resize`, () => {
        let spyResize = spyOn(app, 'onResize');
        window.dispatchEvent(new Event('resize', { bubbles: true } ));
        expect(spyResize).toHaveBeenCalled();
    });

    it('should header be not null', () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('header')).not.toBeNull();
    });

    it('should footer be not null', () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('footer')).not.toBeNull();
    });

    it('should main be not null', () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('main')).not.toBeNull();
    });
});
