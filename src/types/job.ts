export interface Company {
  id: number;
  name: string;
  short_name: string;
}

export interface Location {
  name: string;
}

export interface Level {
  name: string;
  short_name: string;
}

export interface Refs {
  landing_page: string;
}

export interface Job {
  id: number;
  name: string;
  contents: string;
  company: Company;
  locations: Location[];
  levels: Level[];
  refs: Refs;
}

export interface ApiResponse {
  page: number;
  page_count: number;
  items_per_page: number;
  total: number;
  results: Job[];
}