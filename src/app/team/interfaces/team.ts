export interface Team {
  description?: string;
  id?: string;
  name?: string;
  players?: string[];
  sport?: TSport;
}

export type TSport = 'baseball' | 'bowling' | 'hockey';
