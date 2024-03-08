import * as Factory from 'factory.ts';
import { GameplanValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';

export const makeGameplanFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<GameplanValue>({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    impulse: {},
    impulseDebrief: {},
    tacticsById: {},
    time: {},
    location: {},
    scheduledNotificationIds: [],
  });
