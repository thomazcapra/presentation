/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardTechComponent } from './card-tech.component';

describe('CardTechComponent', () => {
  let component: CardTechComponent;
  let fixture: ComponentFixture<CardTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTechComponent ]
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
