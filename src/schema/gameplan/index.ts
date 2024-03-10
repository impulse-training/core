import * as yup from 'yup';
import { TimestampLike } from '../../utils/TimestampLike';
import { TacticValue, WithTacticsById, tacticSchema } from '../tactic';
import { optionalStringArray } from '../utils/array';
import { objectOf, optionalObjectOf } from '../utils/objectOf';
import { optionalTimestampSchema } from '../utils/timestamp';
import { locationRoutineSchema, timeRoutineSchema } from './routines';
import { strategySchema } from './strategy';

export * from './routines';
export * from './strategy';

export type StrategyKey = 'main' | 'success' | 'setback';

export type GameplanValue = WithTypes<typeof gameplanSchema>;
export const gameplanSchema = yup.object().shape({
  uid: yup.string().required(),
  name: yup.string().notRequired(),
  programId: yup.string().notRequired(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  parentIssueIds: optionalStringArray,

  // Strategies - these are the sequences of tactics to try, including conditional tactics
  main: objectOf(strategySchema),
  setback: objectOf(strategySchema),
  success: objectOf(strategySchema),

  // A record of the tactics that are used to measure the outcome, by patternId
  measureTacticIds: objectOf(yup.string()),

  // These are the strategies for scheduled times of day...
  time: optionalObjectOf(timeRoutineSchema.required()),
  // ...Or when arriving at or leaving a location
  location: optionalObjectOf(locationRoutineSchema.required()),
  // Data - we keep copies of relevant data on the gameplan document, for performance reasons
  tacticsById: objectOf(tacticSchema) as any,
  scheduledNotificationIds: optionalStringArray,
});

type WithTypes<T extends yup.ISchema<unknown>> = WithTacticsById<
  yup.InferType<T>
> & {
  createdAt: TimestampLike;
  updatedAt: TimestampLike;
  tacticsById: Record<string, TacticValue>;
};

export const SHORT_DAYS = {
  1: 'Sun',
  2: 'Mon',
  3: 'Tue',
  4: 'Wed',
  5: 'Thu',
  6: 'Fri',
  7: 'Sat',
};

export const LONG_DAYS = [
  '', // This is intentional, as we don't have a 0-indexed day
  'Sundays',
  'Mondays',
  'Tuesdays',
  'Wednesdays',
  'Thursdays',
  'Fridays',
  'Saturdays',
];
