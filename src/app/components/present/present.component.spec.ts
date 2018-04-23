import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentComponent } from './present.component';

describe('PresentComponent', () => {
    let component: PresentComponent;
    let fixture: ComponentFixture<PresentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PresentComponent],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PresentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
