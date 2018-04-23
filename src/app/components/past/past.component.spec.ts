import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastComponent } from './past.component';

describe('PastComponent', () => {
    let component: PastComponent;
    let fixture: ComponentFixture<PastComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PastComponent],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
