export interface Team {
  description?: string;
  id?: string;
  name?: string;
  players?: any[]; //! WIP
  sport?: TSport;
}

export type TSport = 'baseball' | 'bowling' | 'hockey';
