import { PersonalData } from './model/personal-data';
import { logoAnimation, animationStateList } from './animations/logo.animation';
import { Component, AfterViewInit, OnDestroy, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [logoAnimation]
})
export class AppComponent implements AfterViewInit, OnDestroy, OnInit {

    personalData: PersonalData = new PersonalData(
        'Thomaz Capra',
        24,
        `Bachelor's Degree - Computer Science`,
        'About 2 years'
    );

    message: string;
    horizontalStepper: boolean;
    animationState: string;
    currentAnimationIndex: number;

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
        const width = event.target.innerWidth || event.detail.width;
        console.log(width);
        this.horizontalStepper = width > 700;
    }

    constructor() {
    }

    ngOnInit(): void {
        this.currentIndex = 0;
        this.secondMessage = false;
        this.erasing = false;
        this.currentAnimationIndex = 0;
        this.animationState = animationStateList[0];
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

            }, 75);
    }

    ngOnDestroy(): void {
        if (this.intervalID) {
            clearInterval(this.intervalID);
        }
    }

    animationDone($event) {
        this.animationState = animationStateList[
            (this.currentAnimationIndex >= animationStateList.length - 1)
                ? this.currentAnimationIndex = 0
                : ++this.currentAnimationIndex
        ];
    }
}
