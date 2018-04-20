import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-tech',
    templateUrl: './card-tech.component.html',
    styleUrls: ['./card-tech.component.scss']
})
export class CardTechComponent implements OnInit {

    urls = <string[]> [
        '../assets/image/angular.png',
        '../assets/image/angular-typescript.png',
        '../assets/image/csharp.png',
        '../assets/image/c.png',
        '../assets/image/css.png',
        '../assets/image/html.png',
        '../assets/image/js.png',
        '../assets/image/git.png',
        '../assets/image/karma.png',
        '../assets/image/eclipse.png',
        '../assets/image/vscode.png',
        '../assets/image/vstudio.png',
        '../assets/image/win10.png',
        '../assets/image/trello.png',
        '../assets/image/jira.png',
        '../assets/image/slack.png',
        '../assets/image/bitbucket.png'
    ];

    constructor() { }

    ngOnInit() {
    }

}
