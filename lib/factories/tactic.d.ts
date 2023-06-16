import * as Factory from 'factory.ts';
import { TacticValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeTacticFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<TacticValue, "type" | "createdAt" | "updatedAt" | "uid" | "ordinal" | "title" | "originalId" | "description" | "image" | "language" | "href" | "templateFor" | "isBooster" | "tagsSummary" | "featuredCategory" | "showResponseBox" | "deviceTimeRemindersDigest" | "deviceLocationRemindersDigest" | "dataDigest" | "checkInEntries">;
