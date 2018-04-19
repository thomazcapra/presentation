import { CardInfoModel } from './../../model/card-info.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-present',
    templateUrl: './present.component.html',
    styleUrls: ['./present.component.scss']
})
export class PresentComponent implements OnInit {

    presentData = <CardInfoModel>
        new CardInfoModel(
            'Software Developer Analyst 4',
            `https://www.opus-software.com.br/wp-content/uploads/2017/06/logotipo-opus-software.png`,
            'OPUS SOFTWARE',
            '2 main projects right here'
        );

    constructor() { }

    ngOnInit() {
    }
}
