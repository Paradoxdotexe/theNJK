interface Skill {
  technologies: string;
  type: string;
  startYear: number;
}

const Skills: Skill[] = [
  {
    technologies: 'Photoshop, Illustrator',
    type: 'Graphic design tools',
    startYear: 2018
  },
  {
    technologies: 'HTML, CSS, JS, Sass',
    type: 'Web technologies',
    startYear: 2018
  },
  {
    technologies: 'Angular, Vue, React, Node',
    type: 'Javascript/Typescript frameworks',
    startYear: 2019
  },
  {
    technologies: 'Github, Gitlab',
    type: 'Git version control',
    startYear: 2019
  },
  {
    technologies: 'Figma, AdobeXD',
    type: 'Interface design tools',
    startYear: 2021
  },
  {
    technologies: 'Amazon Web Services',
    type: 'Cloud infrastructure',
    startYear: 2021
  }
];

export default Skills;
