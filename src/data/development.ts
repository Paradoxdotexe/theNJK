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
  demo?: string;
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
    title: 'Pallyt App',
    subtitle: 'Putting construction materials at the fingertips of consumers.',
    content: {
      key: 'PA',
      count: 5,
      type: ContentType.MOBILE,
      color: ['#f9f9f9', '#ececec']
    },
    details: {
      client: 'Pallyt Technologies',
      role: 'Head of Technology',
      technologies: ['HTML', 'SCSS', 'Typescript', 'Vue', 'Github', 'Figma', 'Amazon Web Services'],
      platform:
        'Pallyt is an app designed to make the location and delivery of construction materials as efficient as possible. ' +
        'Through Pallyt, customers will be able to search for project materials at any of their local hardware stores or specialty suppliers. ' +
        'They will be able to easily compare prices and stock counts, and order the items they need for either pickup or delivery. ' +
        'Pallyt is built to be the future of material acquisition technology, making construction projects, big and small, easier than ever. ',
      work:
        'To build the Pallyt app, I lead a 5-person Agile Scrum team through the iterative research, design, and development stages of the software development lifecycle. ' +
        'By researching our competitors, creating mockups in Figma, and testing prototypes in the hands of real users, we designed a platform that meets the targeted needs of the construction market. ' +
        'To bring this platform to life, I lead the creation of a progressive Vue web app and oversaw the creation of an Amazon Web Services cloud infrastructure.'
    }
  },
  {
    year: 2021,
    title: 'Pallyt Website',
    subtitle: 'Promoting and informing the world about Pallyt.',
    content: {
      key: 'PW',
      count: 4,
      type: ContentType.WEB,
      color: ['#f9f9f9', '#ececec']
    },
    details: {
      client: 'Pallyt Technologies',
      role: 'Head of Technology',
      technologies: ['HTML', 'SCSS', 'Typescript', 'Vue', 'Github', 'Figma', 'Amazon Web Services'],
      platform:
        'The Pallyt website is the forward-facing platform for the startup Pallyt Technologies. ' +
        'The website is used to explain what the Pallyt app is, show the team involved in making Pallyt a reality, and keep people informed on the team\'s progress. ' +
        'Additionally, the website helps connect Pallyt with interested parties through contact information and a newsletter mailing list.',
      work:
        'In just a few weeks, I designed the Pallyt website in Figma and developed it as a Vue web app. ' +
        'With assistance from two marketing consultants, I created content that would professionally brand Pallyt and make people feel connected with the venture. ' +
        'By integrating with a simple Amazon Web Services back-end, I added the ability to collect email addresses for the Pallyt mailing list.',
      demo: 'https://pallyt.com'
    }
  },
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
    },
  },
  {
    year: 2020,
    title: 'Beecology Data Analysis',
    subtitle: 'Giving people access to Beecology data and the tools to analyze it.',
    content: {
      key: 'BDA',
      count: 6,
      type: ContentType.WEB,
      color: '#ffc107'
    },
    details: {
      client: 'Bio-CS Bridge Project',
      role: 'Angular Web Developer',
      technologies: ['HTML', 'SCSS', 'Typescript', 'Angular', 'PouchDB', 'GitLab', 'Photoshop'],
      platform:
        'The Bio-CS Bridge curriculum uses the study of ecological systems to teach both biology and computer science in a collection of interdisciplinary lesson plans. The platform provides a way for high school teachers to easily search through these lesson plans and view/download their materials.',
      work: 'Over a 9-week iterative process, I met with the Bio-CS Bridge team and a group of teachers to design the structure and layout of this platform. I used Photoshop to mock up my designs and continuously applied feedback that I received. After we reached a design everyone was happy with, I developed the platform framework in Angular.'
    }
  },
  {
    year: 2020,
    title: "Brigham & Women's Hospital Service App",
    subtitle: 'Showing how hospitals can better respond to service requests in a simple web app.',
    content: {
      key: 'BWHSA',
      count: 6,
      type: ContentType.MOBILE,
      color: '#2a3cff'
    },
    details: {
      client: "Brigham & Women's Hospital",
      role: 'Lead Software Engineer',
      technologies: [
        'HTML',
        'CSS',
        'Javascript',
        'Python',
        'Flask',
        'MongoDB',
        'Push API',
        'GitHub'
      ],
      platform:
        'This web app shows how hospitals can use mobile technology to efficiently process service requests from anywhere in the building. The platform has the ability to authenticate staff via an employee database, receive live updates on service requests, and send notifications for new assignments.',
      work: 'I lead the sole development of this web app as the final special feature for a prototype Java application in CS 3733 Software Engineering. Acting as Lead Software Engineer of a 9-person Scrum team, I spent our final week-long sprint developing the Flask-based web app using Material Design Lite components. I also connected the app with our remote MongoDB database and enabled push notifications through the Push API.'
    }
  },
  {
    year: 2020,
    title: "Brigham & Women's Hospital Food App",
    subtitle: 'Showing how hospital kiosks can better facilitate food orders.',
    content: {
      key: 'BWHFA',
      count: 4,
      type: ContentType.WEB,
      color: '#303030'
    },
    details: {
      client: "Brigham & Women's Hospital",
      role: 'Lead Software Engineer',
      technologies: ['Java', 'FXML', 'CSS', 'JavaFX', 'Apache Derby', 'GitHub'],
      platform:
        'This prototype app was built to allow hospital kiosks to carry out on-site food requests and be easily implemented in any JavaFX application via an API. Using Brigham and Women’s Faulkner Hospital as a model, the app allows for orders to the on-site cafeteria and Starbucks. There is also built-in functionality for employees to assign, deny, and complete orders.',
      work: 'As Lead Software Engineer of a 9-person Scrum team, I lead the design and development of this app and API for a prototype, Java application. During a single week-long sprint, I built the app in Java using JavaFX and connected a local Apache Derby database. I also created an API such that any other JavaFX app could easily integrate it.'
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
      technologies: ['HTML', 'SCSS', 'Typescript', 'Angular', 'Google Maps API', 'GitLab'],
      platform:
        'The Beecology Web App gives everyday people the ability to record bumblebee sightings, save them to their device, and upload them to our database. This process helps Beecology study trends in bumblebee populations to better understand how we can help protect them.',
      work: 'Joining the Beecology team, my first task was to improve and build upon the existing web app platform. I extensively overhauled the existing design to refine user experience, enhance given functionality, and offer more dynamic features.'
    }
  },
  {
    year: 2019,
    title: 'PUBG Power',
    subtitle: 'Giving competitive PUBG players a leaderboard that matters.',
    content: {
      key: 'PP',
      count: 3,
      type: ContentType.WEB,
      color: '#f3460e'
    },
    details: {
      client: 'PUBG Community',
      role: 'Web Developer',
      technologies: ['HTML', 'SCSS', 'Javascript', 'Python', 'Flask', 'MongoDB', 'PUBG API'],
      platform:
        'The website PUBG Power produces a live leaderboard of player stats ranked by their “power score.” This score is calculated by my own algorithm and serves to be a more accurate representation of player skill than the game provides itself. The website also allows users to search for players by their in-game name to view more in-depth statistics.',
      work: 'I developed PUBG Power as a personal side project to flesh out my web development skills. I used Python Flask to easily host the website and interact with both the PUBG API (to fetch player statistics) and a remote MongoDB database (to store peristent player and leaderboard data). For the front-end, I used basic HTML, CSS, and Javascript.'
    }
  }
];

export default DevelopmentEntries;
