export enum ContentType {
  WEB = 'WEB',
  MOBILE = 'MOBILE'
}

export interface DevelopmentEntryContent {
  key: string;
  count: number;
  type: ContentType;
  color: string | string[];
}

export interface DevelopmentEntryDetails {
  client: string;
  role: string;
  technologies: string[];
  platform: string;
  work: string;
}

export interface DevelopmentEntry {
  year: number;
  title: string;
  subtitle: string;
  content: DevelopmentEntryContent;
  details: DevelopmentEntryDetails;
}

const DevelopmentEntries: DevelopmentEntry[] = [
  {
    year: 2021,
    title: 'Bio-CS Bridge Curriculum',
    subtitle: 'Bridging biology and computer science in education through digital ecology.',
    content: {
      key: 'BCBC',
      count: 5,
      type: ContentType.WEB,
      color: ['#10af59', '#1a7bbe']
    },
    details: {
      client: 'Bio-CS Bridge Project',
      role: 'Angular Web Developer',
      technologies: ['HTML', 'SCSS', 'Typescript', 'Angular', 'GitLab', 'Photoshop', 'Figma'],
      platform:
        'The Bio-CS Bridge curriculum uses the study of ecological systems to teach both biology and computer science in a collection of interdisciplinary lesson plans. The platform provides a way for high school teachers to easily search through these lesson plans and view/download their materials.',
      work: 'Over a 9-week iterative process, I met with the Bio-CS Bridge team and a group of teachers to design the structure and layout of this platform. I used Photoshop to mock up my designs and continuously applied feedback that I received. After we reached a design everyone was happy with, I developed the platform framework in Angular.'
    }
  },
  {
    year: 2020,
    title: 'Beecology Web App',
    subtitle: 'Enabling citizen scientists to help study bumblebee populations.',
    content: {
      key: 'BWA',
      count: 5,
      type: ContentType.MOBILE,
      color: '#ffc107'
    },
    details: {
      client: 'Bio-CS Bridge Project',
      role: 'Angular Web Developer',
      technologies: ['HTML', 'SCSS', 'Typescript', 'Angular', 'GitLab'],
      platform:
        'The Beecology Web App gives everyday people the ability to record bumblebee sightings, save them to their device, and upload them to our database. This process helps Beecology study trends in bumblebee populations to better understand how we can help protect them.',
      work: 'Joining the Beecology team, my first task was to improve and build upon the existing web app platform. I extensively overhauled the existing design to refine user experience, enhance given functionality, and offer more dynamic features.'
    }
  }
];

export default DevelopmentEntries;
