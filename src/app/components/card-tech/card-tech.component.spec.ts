import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTechComponent } from './card-tech.component';

describe('CardTechComponent', () => {
    let component: CardTechComponent;
    let fixture: ComponentFixture<CardTechComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CardTechComponent],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CardTechComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
