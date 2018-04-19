import { CardInfoModel } from './../../model/card-info.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-future',
    templateUrl: './future.component.html',
    styleUrls: ['./future.component.scss']
})
export class FutureComponent implements OnInit {

    futureData = <Array<CardInfoModel>>[
        new CardInfoModel(
            'Full Stack Developer / Front End Developer',
            `../assets/image/bold-icon.png`,
            'Bold International',
            'Almost there :)'
        ),
        new CardInfoModel(
            'Master Degree - Computer Science',
            `https://colegiomente-cerebro.ulisboa.pt/wp-content/uploads/2015/11/ULisboa_logo.png`,
            'Universidade de Lisboa',
            'Maybe cyber security'
        )
    ];


    constructor() { }

    ngOnInit() {
    }

}
