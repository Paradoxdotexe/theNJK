export enum ContentFormat {
  POSTER = 'Poster',
  WEBSITE = 'Website',
  LOGO = 'Logo',
  SIGN = 'Outdoor Sign',
  SPREAD = 'Magazine Spread',
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
  description: string;
  format: ContentFormat;
  width: ContentWidth;
  height: ContentHeight
}

const DesignEntries: DesignEntry[] = [
  {
    title: 'Significant Other',
    key: 'SO',
    description: 'In WR 2310 Visual Rhetoric, I created a poster for the play Significant Other being presented by the WPI Masque theatre club.',
    format: ContentFormat.POSTER,
    width: ContentWidth.SMALL,
    height: ContentHeight.TALL
  },
  {
    title: 'Beecology Conservation Habitat',
    key: 'BCH',
    description: 'As part of my work with the Beecology project, I designed a 12" x 18" outdoor sign for Beecology pollinator conversation habitats.',
    format: ContentFormat.SIGN,
    width: ContentWidth.LARGE,
    height: ContentHeight.TALL
  },
  {
    title: 'theNJK Magazine',
    key: 'NJK',
    description: 'For my final project in AR 2301 Graphic Design, I was tasked with creating a 2-page magazine spread that coincided a website design. As you can see, I designed a magazine version of this very website.',
    format: ContentFormat.SPREAD,
    width: ContentWidth.LARGE,
    height: ContentHeight.SHORT
  },
  {
    title: 'Return of the King',
    key: 'ROTK',
    description: 'In AR 2301 Graphic Design, I got to design a book cover for any book of my choosing; as such, I chose Lord of the Rings: Return of the King.',
    format: ContentFormat.COVER,
    width: ContentWidth.SMALL,
    height: ContentHeight.SHORT
  },
  {
    title: 'Battery Day',
    key: 'BD',
    description: 'In AR 2301 Graphic Design, I was allowed to create a poster for any event I wanted. Being a huge fan of Tesla, I created a posted for their upcoming stockholder meeting dubbed "Battery Day".',
    format: ContentFormat.POSTER,
    width: ContentWidth.SMALL,
    height: ContentHeight.TALL
  },
  {
    title: 'Online Support Groups',
    key: 'OSG',
    description: 'As part of a 14-week WPI research project, I worked on a team to explore support groups in the US and develop an online platform adapted to China\'s cultural landscape. For this, I took charge or creating a collection of mockups based on our final recommendations.',
    format: ContentFormat.WEBSITE,
    width: ContentWidth.LARGE,
    height: ContentHeight.TALL
  },
  {
    title: 'Paradoxdotexe',
    key: 'PRDX',
    description: 'Being an avid gamer, I designed myself a logo for my gaming alias "Paradoxdotexe". This was one of the first logos I ever designed.',
    format: ContentFormat.LOGO,
    width: ContentWidth.LARGE,
    height: ContentHeight.SHORT
  },
  {
    title: 'Gaming News',
    key: 'GN1',
    description: 'For an assignment in AR 2301 Graphic Design, I had to create two unique logos for a fictional app; the generic app name I used was "Gaming News".',
    format: ContentFormat.LOGO,
    width: ContentWidth.SMALL,
    height: ContentHeight.SHORT
  },
  {
    title: 'Gaming News',
    key: 'GN2',
    description: 'For an assignment in AR 2301 Graphic Design, I had to create two unique logos for a fictional app; the generic app name I used was "Gaming News".',
    format: ContentFormat.LOGO,
    width: ContentWidth.SMALL,
    height: ContentHeight.SHORT
  },
  {
    title: 'Bidding Procurement Scope',
    key: 'BPS',
    description: 'For a potential startup called BPS, based around the pre-construction industry, I designed a logo that was to be used if the idea had proved viable.',
    format: ContentFormat.LOGO,
    width: ContentWidth.LARGE,
    height: ContentHeight.SHORT
  }
];

export default DesignEntries;
