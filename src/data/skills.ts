interface Skill {
  technologies: string;
  type: string;
  startYear: number;
}

const Skills: Skill[] = [
  {
    technologies: 'TypeScript, Javascript, HTML, CSS',
    type: 'Web languages',
    startYear: 2018
  },
  {
    technologies: 'React, Vue, Angular',
    type: 'Web frameworks',
    startYear: 2019
  },
  {
    technologies: 'Figma, Adobe XD, Photoshop',
    type: 'Product design',
    startYear: 2020
  },
  {
    technologies: 'Python, Django, Flask',
    type: 'Backend development',
    startYear: 2021
  },
  {
    technologies: 'Amazon Web Services',
    type: 'Cloud infrastructure',
    startYear: 2021
  }
];

export default Skills;
