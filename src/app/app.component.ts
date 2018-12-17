import {Component, OnInit} from '@angular/core';
import * as particlesJS from 'particles.js';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'curriculum';

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particlesjs-config.json', null);
  }
}
