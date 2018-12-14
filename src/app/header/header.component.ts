import {Component, OnInit} from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isEnglish = false;

  constructor() {
  }

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particlesjs-config.json', null);
  }

  toggleLanguage(): boolean {
    return this.isEnglish = !this.isEnglish;
  }
}
