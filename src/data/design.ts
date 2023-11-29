export enum ContentFormat {
  POSTER = 'Poster',
  WEBSITE = 'Website',
  LOGO = 'Logo',
  SIGN = 'Sign',
  SPREAD = 'Magazine',
  COVER = 'Book'
}

export enum ContentWidth {
  SMALL = 1,
  LARGE = 2
}

export enum ContentHeight {
  SHORT,
  TALL
}

export interface DesignEntry {
  title: string;
  key: string;
  contentCount: number;
  description: string;
  format: ContentFormat;
  width: ContentWidth;
  height: ContentHeight;
  dark?: boolean;
}

const DesignEntries: DesignEntry[] = [
  {
    title: 'The Rummage Room',
    key: 'RR',
    contentCount: 1,
    description: 'For an eBay store that sells a wide variety of items, I created a logo, a store banner, and business cards to improve their brand presence.',
    format: ContentFormat.LOGO,
    width: ContentWidth.LARGE,
    height: ContentHeight.SHORT
  },
  {
    title: 'HMD Customs',
    key: 'HMD',
    contentCount: 2,
    description: 'I created a social media logo for a CNC and wood-burning business.',
    format: ContentFormat.LOGO,
    width: ContentWidth.SMALL,
    height: ContentHeight.SHORT,
  },
  {
    title: 'Pallyt Technologies',
    key: 'PT',
    contentCount: 2,
    description:
      'For a new gig-economy service startup called Pallyt, I designed the logo that would be used for all company branding.',
    format: ContentFormat.LOGO,
    width: ContentWidth.SMALL,
    height: ContentHeight.SHORT,
    dark: true
  },
  {
    title: 'Bidding Procurement Scope',
    key: 'BPS',
    contentCount: 1,
    description:
      'For a potential startup called BPS, based around the pre-construction industry, I designed a logo that was to be used if the idea had proved viable.',
    format: ContentFormat.LOGO,
    width: ContentWidth.LARGE,
    height: ContentHeight.SHORT
  },
  {
    title: 'Beecology Conservation Habitat',
    key: 'BCH',
    contentCount: 1,
    description:
      'As part of my work with the Beecology project, I designed a 12" x 18" outdoor sign for Beecology pollinator conversation habitats.',
    format: ContentFormat.SIGN,
    width: ContentWidth.LARGE,
    height: ContentHeight.TALL
  },
  {
    title: 'Significant Other',
    key: 'SO',
    contentCount: 1,
    description:
      'In WR 2310 Visual Rhetoric, I created a poster for the play Significant Other being presented by the WPI Masque theatre club.',
    format: ContentFormat.POSTER,
    width: ContentWidth.SMALL,
    height: ContentHeight.TALL
  },
  {
    title: 'Return of the King',
    key: 'ROTK',
    contentCount: 1,
    description:
      'In AR 2301 Graphic Design, I redesigned the cover of the classic book, Lord of the Rings: Return of the King.',
    format: ContentFormat.COVER,
    width: ContentWidth.SMALL,
    height: ContentHeight.SHORT
  },
  {
    title: 'theNJK Magazine',
    key: 'NJK',
    contentCount: 1,
    description:
      'For my final project in AR 2301 Graphic Design, I was tasked with creating a 2-page magazine spread that coincided a website design. As you can see, I designed a magazine version of this very website.',
    format: ContentFormat.SPREAD,
    width: ContentWidth.LARGE,
    height: ContentHeight.SHORT
  },
  {
    title: 'Online Support Groups',
    key: 'OSG',
    contentCount: 10,
    description:
      "As part of a 14-week WPI research project, I worked on a team to design an online support group platform adapted to China's cultural landscape. For this, I took charge of creating a collection of mockups based on our final recommendations.",
    format: ContentFormat.WEBSITE,
    width: ContentWidth.LARGE,
    height: ContentHeight.TALL
  },
  {
    title: 'Battery Day',
    key: 'BD',
    contentCount: 1,
    description:
      'In AR 2301 Graphic Design, I created a poster for the Tesla stockholder meeting dubbed "Battery Day".',
    format: ContentFormat.POSTER,
    width: ContentWidth.SMALL,
    height: ContentHeight.TALL
  },
  {
    title: 'Gaming News',
    key: 'GN',
    contentCount: 2,
    description:
      'For an assignment in AR 2301 Graphic Design, I designed two unique logos for a fictional app called "Gaming News".',
    format: ContentFormat.LOGO,
    width: ContentWidth.SMALL,
    height: ContentHeight.SHORT
  },
  {
    title: 'Paradoxdotexe',
    key: 'PRDX',
    contentCount: 1,
    description:
      'Being an avid gamer, I designed myself a logo for my gaming alias "Paradoxdotexe". This was one of the first logos I ever designed.',
    format: ContentFormat.LOGO,
    width: ContentWidth.LARGE,
    height: ContentHeight.SHORT,
    dark: true
  }
];

export default DesignEntries;
