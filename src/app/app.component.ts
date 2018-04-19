import { Component, AfterViewInit, OnDestroy, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy, OnInit {

    name = 'Thomaz Capra';
    message: string;
    horizontalStepper: boolean;

    private changingMessage = <string[]>[
        'Software Developer',
        'BOLD International'
    ];

    private currentIndex: number;
    private secondMessage: boolean;
    private erasing: boolean;

    private intervalID: any;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        const width = event.target.innerWidth;
        this.horizontalStepper = window.innerWidth > 700;
    }

    constructor() { }

    ngOnInit(): void {
        this.currentIndex = 0;
        this.secondMessage = false;
        this.erasing = false;
        this.horizontalStepper = window.innerWidth > 700;
    }

    ngAfterViewInit(): void {
        this.typeWriter();
    }

    private typeWriter(): void {
        this.intervalID = setInterval(
            () => {

                if (this.currentIndex === this.changingMessage[+this.secondMessage].length) {
                    this.erasing = true;
                    clearInterval(this.intervalID);
                    setTimeout(() => this.typeWriter(), 1000);
                }

                if (this.currentIndex === 0) {
                    this.secondMessage = !this.secondMessage;
                    this.erasing = false;
                }

                this.message = this.changingMessage[+this.secondMessage].substring(0,
                    this.erasing ? this.currentIndex-- : this.currentIndex++);

            }, 150);
    }

    ngOnDestroy(): void {
        if (this.intervalID) {
            clearInterval(this.intervalID);
        }
    }
}
