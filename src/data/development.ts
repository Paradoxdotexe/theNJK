export enum ContentType {
  WEB = 'WEB',
  MOBILE = 'MOBILE'
}

export interface DevelopmentEntryContent {
  key: string;
  count: number;
  type: ContentType;
}

export interface DevelopmentEntryDetails {
  client: string,
  role: string,
  technologies: string[],
  platform: string,
  work: string
}

export interface DevelopmentEntry {
  year: number;
  title: string;
  subtitle: string;
  content: DevelopmentEntryContent,
  details: DevelopmentEntryDetails
}

const DevelopmentEntries: DevelopmentEntry[] = [
  {
    year: 2021,
    title: 'Bio-CS Bridge Curriculum',
    subtitle: 'Bridging biology and computer science in education through digital ecology.',
    content: {
      key: 'BCBC',
      count: 3,
      type: ContentType.WEB
    },
    details: {
      client: 'Bio-CS Bridge Project',
      role: 'Angular Web Developer',
      technologies: ['HTML', 'SCSS', 'Typescript', 'Angular', 'GitLab', 'Photoshop', 'Figma'],
      platform: 'The Bio-CS Bridge curriculum uses the study of ecological systems to teach both biology and computer science in a collection of interdisciplinary lesson plans. The platform provides a way for high school teachers to easily search through these lesson plans and view/download their materials.',
      work: 'Over a 9-week iterative process, I met with the Bio-CS Bridge team and a group of teachers to design the structure and layout of this platform. I used Photoshop to mock up my designs and continuously applied feedback that I received. After we reached a design everyone was happy with, I developed the platform framework in Angular.'
    }
  }
];

export default DevelopmentEntries;
