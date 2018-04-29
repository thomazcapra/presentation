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
                './assets/image/ufscar.png',
                'Federal University of São Carlos',
                'I was monitor in the course: Data Structures'
            ),
            new CardInfoModel(
                'System Analyst',
                './assets/image/setis.gif',
                'SETIS Automação e Sistemas Ltda',
                'Applications: Test PinPad, ZipLog, VerifoneLoader'
            ),
        ];

    constructor() { }

    ngOnInit() {
    }
}
