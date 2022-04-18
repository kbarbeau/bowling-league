import { Team } from 'src/app/team/interfaces/team';

export interface Event {
  awayTeam?: string | Team;
  date?: Date;
  description?: string;
  homeTeam?: string | Team;
  location?: string;
  name?: string;
  type?: 'game' | 'practice' | 'other';
}
