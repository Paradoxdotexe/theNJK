interface Skill {
  technologies: string;
  type: string;
  years: number;
}

const Skills: Skill[] = [
  {
    technologies: 'Photoshop, Illustrator',
    type: 'Graphic design tools',
    years: 4
  },
  {
    technologies: 'HTML, CSS, Sass',
    type: 'Web languages',
    years: 4
  },
  {
    technologies: 'Angular, Vue, React, Node',
    type: 'Javascript/Typescript Frameworks',
    years: 3
  },
  {
    technologies: 'Github, Gitlab',
    type: 'Git version control',
    years: 3
  },
  {
    technologies: 'Figma, AdobeXD',
    type: 'Interface design tools',
    years: 1
  },
  {
    technologies: 'Amazon Web Services',
    type: 'Cloud infrastructure',
    years: 1
  }
];

export default Skills;
