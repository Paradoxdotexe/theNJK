import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  courses = {
    cs: ['Accelerated Intro to Program Design', 'Object-Oriented Design Concepts', 'Systems Programming Concepts', 'Intro to Machine Organization and Assembly',
      'Accelerated Intro to Program Design', 'Discrete Math', 'Algorithms', 'Foundations of Computer Science', 'Software Engineering'],
    imgd: ['Critical Studies of Interactive Media and Games', 'The Game Development Process', 'Game Audio I', 'Social Issues in Interactive Media and Games',
    'Graphic Design']
  };

  skills = {
    development: ['Proficient web development in HTML, JS, and TS using Flask and Angular', 'Proficient software development in Java and Python',
      'Proficient integration of API specifications', 'Competent database implementation with MongoDB and Apache Derby',
      'Competent creation of UML diagrams', 'Competent software development in C, C#, and C++'],
    design: ['Proficient UI/UX design targeting user experience', 'Proficient web design in CSS and SCSS following Material Design',
      'Proficient graphic design in Adobe Photoshop, Illustrator, and InDesign', 'Competent video production in Adobe Premier Pro',
      'Rudimentary audio design in Audacity and Reaper']
  };

  constructor() { }

}
