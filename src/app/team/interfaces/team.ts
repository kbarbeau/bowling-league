export interface Team {
  description?: string;
  id?: string;
  name?: string;
  sport?: TSport;
}

export type TSport = 'baseball' | 'bowling' | 'hockey';
