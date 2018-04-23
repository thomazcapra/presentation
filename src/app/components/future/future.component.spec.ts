import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureComponent } from './future.component';

describe('FutureComponent', () => {
    let component: FutureComponent;
    let fixture: ComponentFixture<FutureComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FutureComponent],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FutureComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
