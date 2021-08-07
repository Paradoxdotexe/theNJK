export enum ContentFormat {
  POSTER = 'Poster',
  WEBSITE = 'Website',
  LOGO = 'Logo',
  SIGN = 'Outdoor Sign',
  SPREAD = 'Magazine Spread',
  COVER = 'Book'
}

export interface DesignEntry {
  title: string;
  key: string;
  format: ContentFormat;
}

const DesignEntries: DesignEntry[] = [
  {
    title: 'Significant Other',
    key: 'SO',
    format: ContentFormat.POSTER
  },
  {
    title: 'Beecology Conservation Habitat',
    key: 'BCH',
    format: ContentFormat.SIGN
  },
  {
    title: 'theNJK Magazine',
    key: 'NJK',
    format: ContentFormat.SPREAD
  },
  {
    title: 'Return of the King',
    key: 'ROTK',
    format: ContentFormat.COVER
  },
  {
    title: 'Battery Day',
    key: 'BD',
    format: ContentFormat.POSTER
  },
  {
    title: 'Online Support Groups',
    key: 'OSG',
    format: ContentFormat.WEBSITE
  },
  {
    title: 'Paradoxdotexe',
    key: 'PRDX',
    format: ContentFormat.LOGO
  },
  {
    title: 'Gaming News',
    key: 'GN1',
    format: ContentFormat.LOGO
  },
  {
    title: 'Gaming News',
    key: 'GN2',
    format: ContentFormat.LOGO
  },
  {
    title: 'Bidding Procurement Scope',
    key: 'BPS',
    format: ContentFormat.LOGO
  }
];

export default DesignEntries;
