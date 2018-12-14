import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {Experience} from '../model/experience';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  // animations: [
  //   trigger('scrollAnimation', [
  //     state('show', style({
  //       opacity: 1,
  //       transform: 'scale(1)'
  //     })),
  //     state('hide', style({
  //       opacity: 0,
  //       transform: 'scale(0)'
  //     })),
  //     transition('show => hide', animate('300ms ease-out')),
  //     transition('hide => show', animate('300ms ease-in'))
  //   ])
  // ]
})
export class ExperienceComponent implements OnInit {

  @Input() experience: Experience;
  // state = 'hide';

  constructor(public el: ElementRef) {
  }

  ngOnInit() {
  }

  // @HostListener('window:scroll', ['$event'])
  // checkScroll() {
  //   const componentPosition = this.el.nativeElement.offsetTop;
  //   const scrollPosition = window.pageYOffset;
  //   if (scrollPosition >= componentPosition) {
  //     this.state = 'show';
  //   } else {
  //     this.state = 'hide';
  //   }
  // }
}
