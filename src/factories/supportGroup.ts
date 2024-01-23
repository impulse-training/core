import * as Factory from 'factory.ts';
import { SupportGroupValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';

export const makeSupportGroupFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<SupportGroupValue>({
    groupName: 'Cold Turkey Warriors',
    participantUids: [],
    thumbnailUrl: '',
    permissions: {},
    unreadCounts: {},
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    creatorName: 'Mooky',
    creatorUid: 'abc123',
    icon: 'group',
    suggestedTacticIds: {},
  });
