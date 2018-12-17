import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {Experience} from '../model/experience';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {

  @Input() experience: Experience;

  constructor(public el: ElementRef) {
  }

  ngOnInit() {
  }
}
