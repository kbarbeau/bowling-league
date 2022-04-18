import { DateTime } from 'luxon';

const now: DateTime = DateTime.local();

export const START_DATE_MAX: string = `9999-12-31T23:59`;
export const START_DATE_MIN: string = `${now.toFormat('yyyy-MM-dd')}T00:00`;
