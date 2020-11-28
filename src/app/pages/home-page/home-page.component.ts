import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements AfterViewInit {

  courses = {
    cs: ['Accelerated Intro to Program Design', 'Object-Oriented Design Concepts', 'Systems Programming Concepts', 'Intro to Machine Organization and Assembly',
      'Accelerated Intro to Program Design', 'Discrete Math', 'Algorithms', 'Foundations of Computer Science', 'Software Engineering'],
    imgd: ['Critical Studies of Interactive Media and Games', 'The Game Development Process', 'Game Audio I', 'Social Issues in Interactive Media and Games',
    'Graphic Design']
  };

  constructor() { }

  ngAfterViewInit(): void {
    if (window.scrollY !== 0) {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }

}
