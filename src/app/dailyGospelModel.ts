export class DailyGospelModel {
  READINGTYPE = "gospel";
  gospel_date: string;
  date_displayed: string;
  readings: Readings[];
  readings_type: string;
  readings_reference_displayed: string;
  readings_title: string;
  readings_text: string;
}


export class Readings {
  id: string;
  reading_code: string;
  before_reading: string;
  chorus: string;
  type: string;
  audio_url: string;
  reference_displayed: string;
  book: Book;
  text: string;
  href: string;
  source: string;
  book_type: string;
  title: string;
}

export class Book {
  code: string;
  short_title: string;
  full_title: string;
}