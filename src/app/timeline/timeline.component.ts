import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {EXPERIENCES} from '../mock/mock-experiences';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide',   style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class TimelineComponent implements OnInit {

  state = 'hide';
  experiences;
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  isLeftContainer = false;

  constructor(public el: ElementRef) { }

  ngOnInit() {

    this.experiences = EXPERIENCES.map(experience => {
      return {
        client: experience.client,
        title: experience.title,
        from: this.monthNames[experience.from.getMonth()] + ' ' + experience.from.getFullYear(),
        to: this.monthNames[experience.to.getMonth()] + ' ' + experience.to.getFullYear(),
        technologies: experience.technologies
      };
    });
  }

  isLeft(): boolean {
    return this.isLeftContainer = !this.isLeftContainer;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= componentPosition) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }

  }

}
