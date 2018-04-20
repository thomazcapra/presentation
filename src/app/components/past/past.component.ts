import { CardInfoModel } from './../../model/card-info.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-past',
    templateUrl: './past.component.html',
    styleUrls: ['./past.component.scss']
})
export class PastComponent implements OnInit {

    pastData = <Array<CardInfoModel>>
        [
            new CardInfoModel(
                `Bachelor's Degree - Computer Science`,
                'http://www.empts.com.br/system/news/images/000/000/006/internal/ufscar.jpg?1381417219',
                'Federal University of São Carlos',
                'I was monitor in the course: Data Structures'
            ),
            new CardInfoModel(
                'System Analyst',
                'https://setis.com.br/homepage/img/logo_setis.gif',
                'SETIS Automação e Sistemas Ltda',
                'Applications: Test PinPad, ZipLog, VerifoneLoader'
            ),
        ];

    constructor() { }

    ngOnInit() {
    }
}
