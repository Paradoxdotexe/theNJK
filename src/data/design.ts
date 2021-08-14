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
  format: ContentFormat;
  width: ContentWidth;
  height: ContentHeight
}

const DesignEntries: DesignEntry[] = [
  {
    title: 'Significant Other',
    key: 'SO',
    format: ContentFormat.POSTER,
    width: ContentWidth.SMALL,
    height: ContentHeight.TALL
  },
  {
    title: 'Beecology Conservation Habitat',
    key: 'BCH',
    format: ContentFormat.SIGN,
    width: ContentWidth.LARGE,
    height: ContentHeight.TALL
  },
  {
    title: 'theNJK Magazine',
    key: 'NJK',
    format: ContentFormat.SPREAD,
    width: ContentWidth.LARGE,
    height: ContentHeight.SHORT
  },
  {
    title: 'Return of the King',
    key: 'ROTK',
    format: ContentFormat.COVER,
    width: ContentWidth.SMALL,
    height: ContentHeight.SHORT
  },
  {
    title: 'Battery Day',
    key: 'BD',
    format: ContentFormat.POSTER,
    width: ContentWidth.SMALL,
    height: ContentHeight.TALL
  },
  {
    title: 'Online Support Groups',
    key: 'OSG',
    format: ContentFormat.WEBSITE,
    width: ContentWidth.LARGE,
    height: ContentHeight.TALL
  },
  {
    title: 'Paradoxdotexe',
    key: 'PRDX',
    format: ContentFormat.LOGO,
    width: ContentWidth.LARGE,
    height: ContentHeight.SHORT
  },
  {
    title: 'Gaming News',
    key: 'GN1',
    format: ContentFormat.LOGO,
    width: ContentWidth.SMALL,
    height: ContentHeight.SHORT
  },
  {
    title: 'Gaming News',
    key: 'GN2',
    format: ContentFormat.LOGO,
    width: ContentWidth.SMALL,
    height: ContentHeight.SHORT
  },
  {
    title: 'Bidding Procurement Scope',
    key: 'BPS',
    format: ContentFormat.LOGO,
    width: ContentWidth.LARGE,
    height: ContentHeight.SHORT
  }
];

export default DesignEntries;
