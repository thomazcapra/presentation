import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-card-info',
    templateUrl: './card-info.component.html',
    styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

    @Input('title') title: string;
    @Input('where') where: string;
    @Input('description') description: string;
    @Input('icon') icon: string;

    constructor() { }

    ngOnInit() {
    }

}
