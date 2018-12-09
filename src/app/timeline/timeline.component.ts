import {Component, OnInit} from '@angular/core';
import {EXPERIENCES} from '../mock/mock-experiences';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  experiences;
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  isLeftContainer = false;

  constructor() {
  }

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

}
