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
        'The Bio-CS Bridge curriculum uses the study of ecological systems to teach both biology and computer science in a collection of transdisciplinary lesson plans. ' +
        'The platform provides a way for high school teachers to easily search through these lesson plans and view/download their materials. ' +
        'In order for teachers to upload and update lesson plans in a centralized way, the platform provides a host of editing tools that can be used to update curriculum data.',
      work:
        'Over a 9-week iterative process, I met with the Bio-CS Bridge team and a group of teachers to design the structure and layout of this new education platform. ' +
        'I used Photoshop to mock up my interface designs that I continuously improved based on feedback from the teachers. ' +
        'After we reached a design everyone was happy with, I developed the platform as a progressive Angular web app that connected with a REST API for retrieving and manipulating curriculum data. ' +
        'Once the core platform was established, I made continual updates that improved the platform\'s usability and added new, useful features.'
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
        'The Beecology Data Analysis platform offers a dynamic environment for interacting with bumblebee observation data collected by Beecology. ' +
        'The platform offers mechanisms for filtering through 10,000 data points and easily conducting analysis and visualization on selected datasets. ' +
        'As such, this app is extremely useful in studying bumblebee behavior that can be used to improve the conservation of pollinators.',
      work:
        'I worked to improve this Angular platform by overhauling the data selection interface to be more user-friendly and intuitive. ' +
        'To do this, I created the idea for being able to select data sets and save them for later in a convenient panel. ' +
        'I was also responsible for beginning the development of analysis tools with the Bar Chart Comparison Tool. ' +
        'This tool was connected with a back-end server that took care of the analysis calculations for client-side rendering.',
      demo: 'https://beecology.wpi.edu/analysis'
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
        'This prototype web app shows how hospitals can utilize mobile technology to efficiently process service requests from anywhere in the building. ' +
        'The platform has the ability to authenticate staff through an employee database, receive live updates for service requests, and send notifications for new request assignments.',
      work:
        'In one short week, I lead the sole development of this web app as the final special feature for a prototype Java application in CS 3733 Software Engineering. ' +
        'Acting as the Lead Software Engineer of a 9-person Scrum team, I spent our final week-long sprint developing a Flask-based web app using Material Design Lite components. ' +
        'The app was connected with a remote MongoDB database to authenticate user credentials and manage streams of order request data. ' +
        'I also integrated a service worker that could send push notifications via the Push API.'
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
        'This prototype Java application was built to allow hospital kiosks to track and respond to on-site food requests. ' +
        'Using Brigham and Women’s Hospital as a model, the app allows for orders to be placed at the on-location cafeteria or Starbucks. ' +
        'Through an admin panel, employees are given access to assign, deny, and complete orders in real-time.',
      work:
        'As the Lead Software Engineer of a 9-person Scrum team, I lead the design and development of this app for a much larger prototype, Java application. ' +
        'During a single week-long sprint, I built the app in Java using JavaFX and connected it with a local Apache Derby database to retrieve order requests and employee information. ' +
        'I also established a thoroughly-documented API such that any other JavaFX application could easily integrate with it.'
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
        'The Beecology Web App gives citizen scientists the ability to record bumblebee sightings, save them to their device, and upload them to our database. ' +
        'This process helps Beecology study trends in bumblebee populations to better understand how we can protect them.',
      work:
        'Joining the Beecology team, my first task was to improve and build upon the existing Angular app. ' +
        'As such, my work included extensively overhauling the existing design to refine user experience, enhance given functionality, and offer more dynamic features. ' +
        'Additionally, I helped expand the app to support butterfly observations, so Beecology could grow their pollinator conservation efforts.',
      demo: 'https://beecology.wpi.edu/webapp'
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
      technologies: ['HTML', 'CSS', 'Javascript', 'Python', 'Flask', 'MongoDB', 'PUBG API'],
      platform:
        'PUBG Power is a website that produces a live leaderboard that ranks the stats of PUBG players by their “power score.” ' +
        'This score is calculated by my own algorithm that serves to be a more accurate representation of player skill than the game provides itself. ' +
        'The website allows users to search for players by their in-game name to add them to the global leaderboard and view their individual statistics.',
      work:
        'I developed PUBG Power as a personal side project to flesh out my web development skills. ' +
        'I used Python Flask to host a simple website made of HTML, CSS, and Javascript. ' +
        'Through Python scripts, I integrated the PUBG API to fetch player statistics and a remote MongoDB database to store persistent player data.'
    }
  }
];

export default DevelopmentEntries;
