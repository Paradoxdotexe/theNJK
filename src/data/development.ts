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
    year: 2023,
    title: 'Tunic Website',
    subtitle: 'Marketing Tunic to prospective developers.',
    content: {
      key: 'TW',
      count: 5,
      type: ContentType.WEB,
      color: '#06bd5f'
    },
    details: {
      client: 'Jellyfish',
      role: 'Lead Frontend Engineer',
      technologies: ['HTML', 'CSS', 'Typescript', 'React', 'Figma', 'Premiere Pro'],
      platform:
        'The Tunic website was built to facilitate a product-led growth motion towards onboarding new users onto the Tunic app. ' +
        'Emphasis was placed on encouraging prospects to try the freemium service so we could gauge market interest and initiate beta testing.',
      work:
        'I led the design and development of this forward-facing website in the weeks leading up to our beta launch. ' +
        'The content was designed to engage prospective developers, including low fidelity examples of features, an animated timeline sequence, and a teaser trailer demo of the app.'
    }
  },
  {
    year: 2022,
    title: 'Tunic',
    subtitle: 'Optimizing the developer experience through realtime GitHub insights.',
    content: {
      key: 'TA',
      count: 5,
      type: ContentType.WEB,
      color: '#06bd5f'
    },
    details: {
      client: 'Jellyfish',
      role: 'Lead Frontend Engineer',
      technologies: ['HTML', 'CSS', 'Typescript', 'React', 'Django', 'GraphQL', 'Figma'],
      platform:
        'Tunic is a platform designed to help dev teams measure and improve the quality of their development processes through the analysis of quantitative metrics. ' +
        'Using a realtime stream of GitHub events, Tunic provides insights about what a dev team is working on, where they\'re stuck, and how they can get back on track. ' +
        'Tunic targeted a product-led growth approach where any prospect with a GitHub repository could setup and configure the app by themselves.',
      work:
        'Over the span of 8 months, I worked with two other collaborators to build up Tunic from scratch and release it to the public in pursuit of evaluating its potential as a competitive threat vector. ' +
        'I spearheaded the design work in Figma, led the frontend development of a Next.js React app, and supported backend development of a Django server. ' +
        'Using webhooks from GitHub and websockets on the client, we created a realtime experience that would visually and audibly inform the user of their team\'s git-based activity with data-backed insights.'
    }
  },
  {
    year: 2022,
    title: 'Pallyt Website v2',
    subtitle: 'Introducing Pallyt to contractors, suppliers, and investors.',
    content: {
      key: 'PW2',
      count: 8,
      type: ContentType.WEB,
      color: '#bdb282'
    },
    details: {
      client: 'Pallyt Technologies Inc.',
      role: 'Co-Founder & CTO',
      technologies: [
        'HTML',
        'SCSS',
        'Typescript',
        'React',
        'Figma',
        'Amazon Web Services'
      ],
      platform:
        'The second version of the Pallyt website is the new, publicly-facing website for Pallyt, designed to promote the startup, build local interest, and find new partners. ' +
        'This website provides information for three target audiences: construction contractors as the primary user for the Pallyt App, construction suppliers as prospective partners of Pallyt, and angel investors as potential early-stage investors for Pallyt.',
      work:
        'During my final 7-week term at WPI, I carried out a complete overhaul of the Pallyt website, improving its aesthetic, bringing it up-to-date, and converting the previous Vue web app to React. ' +
        'I created new content that would specifically target the intended audiences of the website, creating a space to inform users, partners, and possible investors. ' +
        'For implementation, I built a new React web app from the ground up using Next.js and deployed it as a static website using Amazon Web Services.'
    }
  },
  {
    year: 2021,
    title: 'Pallyt App',
    subtitle: 'Putting construction materials at the fingertips of consumers.',
    content: {
      key: 'PA',
      count: 7,
      type: ContentType.MOBILE,
      color: '#bdb282'
    },
    details: {
      client: 'Pallyt Technologies Inc.',
      role: 'Co-Founder & CTO',
      technologies: ['HTML', 'SCSS', 'Typescript', 'Vue', 'Figma', 'Amazon Web Services'],
      platform:
        'Pallyt is an app designed to make the location and delivery of construction materials as efficient as possible. ' +
        'Through Pallyt, customers will be able to search for project materials at any of their local hardware stores or specialty suppliers. ' +
        'They will be able to easily compare prices and stock counts, and order the items they need for either pickup or delivery. ' +
        'Pallyt is built to be the future of material acquisition technology, making construction projects, big and small, easier than ever. ',
      work:
        'To build the Pallyt app, I led a 5-person Agile Scrum team through the iterative research, design, and development stages of the software development lifecycle. ' +
        'By researching our competitors, creating mockups in Figma, and testing prototypes in the hands of real users, we designed a platform that meets the targeted needs of the construction market. ' +
        'To bring this platform to life, I led the creation of a progressive Vue web app and oversaw the creation of an Amazon Web Services cloud infrastructure.'
    }
  },
  {
    year: 2021,
    title: 'Pallyt Website v1',
    subtitle: 'Promoting and informing the world about Pallyt.',
    content: {
      key: 'PW',
      count: 4,
      type: ContentType.WEB,
      color: '#bdb282'
    },
    details: {
      client: 'Pallyt Technologies Inc.',
      role: 'Co-Founder & CTO',
      technologies: ['HTML', 'SCSS', 'Typescript', 'Vue', 'Figma', 'Amazon Web Services'],
      platform:
        'The first version of the Pallyt website was the forward-facing platform for Pallyt, an emerging startup. ' +
        "The website was used to explain what the Pallyt app is, show the team involved in making Pallyt a reality, and keep people informed on the team's progress. " +
        'Additionally, the website helped connect Pallyt with interested parties through contact information and a newsletter mailing list.',
      work:
        'In just a few weeks, I designed the Pallyt website in Figma and developed it as a Vue web app. ' +
        'With assistance from two marketing consultants, I created content that would professionally brand Pallyt and make people feel connected with the venture. ' +
        'By integrating with a simple Amazon Web Services backend, I added the ability to collect email addresses for the Pallyt mailing list.'
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
      technologies: ['HTML', 'SCSS', 'Typescript', 'Angular', 'Photoshop', 'Figma'],
      platform:
        'The Bio-CS Bridge curriculum uses the study of ecological systems to teach both biology and computer science in a collection of transdisciplinary lesson plans. ' +
        'The platform provides a way for high school teachers to easily search through these lesson plans and view/download their materials. ' +
        'In order for teachers to upload and update lesson plans in a centralized way, the platform provides a host of editing tools that can be used to update curriculum data.',
      work:
        'Over a 9-week iterative process, I met with the Bio-CS Bridge team and a group of teachers to design the structure and layout of this new education platform. ' +
        'I used Photoshop to mock up my interface designs that I continuously improved based on feedback from the teachers. ' +
        'After we reached a design everyone was happy with, I developed the platform as a progressive Angular web app that connected with a REST API for retrieving and manipulating curriculum data. ' +
        "Once the core platform was established, I made continual updates that improved the platform's usability and added new, useful features."
    }
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
      technologies: ['HTML', 'SCSS', 'Typescript', 'Angular', 'PouchDB', 'Photoshop'],
      platform:
        'The Beecology Data Analysis platform offers a dynamic environment for interacting with bumblebee observation data collected by Beecology. ' +
        'The platform offers mechanisms for filtering through 10,000 data points and easily conducting analysis and visualization on selected datasets. ' +
        'As such, this app is extremely useful in studying bumblebee behavior that can be used to improve the conservation of pollinators.',
      work:
        'I worked to improve this Angular platform by overhauling the data selection interface to be more user-friendly and intuitive. ' +
        'To do this, I created the idea for being able to select data sets and save them for later in a convenient panel. ' +
        'I was also responsible for beginning the development of analysis tools with the Bar Chart Comparison Tool. ' +
        'This tool was connected with a backend server that took care of the analysis calculations for client-side rendering.',
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
      ],
      platform:
        'This prototype web app shows how hospitals can utilize mobile technology to efficiently process service requests from anywhere in the building. ' +
        'The platform has the ability to authenticate staff through an employee database, receive live updates for service requests, and send notifications for new request assignments.',
      work:
        'In one short week, I led the sole development of this web app as the final special feature for a prototype Java application in CS 3733 Software Engineering. ' +
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
      technologies: ['Java', 'FXML', 'CSS', 'JavaFX', 'Apache Derby'],
      platform:
        'This prototype Java application was built to allow hospital kiosks to track and respond to on-site food requests. ' +
        'Using Brigham and Women’s Hospital as a model, the app allows for orders to be placed at the on-location cafeteria or Starbucks. ' +
        'Through an admin panel, employees are given access to assign, deny, and complete orders in real-time.',
      work:
        'As the Lead Software Engineer of a 9-person Scrum team, I led the design and development of this app for a much larger prototype, Java application. ' +
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
      technologies: ['HTML', 'SCSS', 'Typescript', 'Angular', 'PouchDB'],
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
