import * as Factory from 'factory.ts';
import { ImpulseGameplanValue, LocationGameplanValue, TimeGameplanValue } from '../schema/gameplan';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeImpulseGameplanFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<ImpulseGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "title" | "isTemplate" | keyof import("../schema/gameplan").Gameplan | "navigationTitle" | "tacticsUpdatedAt" | "timezone" | "patternName" | "issueId" | "parentIssueIds" | "patternId">;
export declare const makeLocationGameplanFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<LocationGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "title" | "isTemplate" | keyof import("../schema/gameplan").Gameplan | "navigationTitle" | "tacticsUpdatedAt" | "timezone" | "patternName" | "issueId" | "parentIssueIds" | "locationId" | "mode">;
export declare const makeTimeGameplanFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<TimeGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "title" | "isTemplate" | "hour" | "minute" | keyof import("../schema/gameplan").Gameplan | "navigationTitle" | "tacticsUpdatedAt" | "timezone" | "patternName" | "issueId" | "parentIssueIds" | "weekdays" | "scheduledNotificationIds">;
export declare const makeSetbackGameplanFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<ImpulseGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "title" | "isTemplate" | keyof import("../schema/gameplan").Gameplan | "navigationTitle" | "tacticsUpdatedAt" | "timezone" | "patternName" | "issueId" | "parentIssueIds" | "patternId">;
export declare const makeSuccessGameplanFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<ImpulseGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "title" | "isTemplate" | keyof import("../schema/gameplan").Gameplan | "navigationTitle" | "tacticsUpdatedAt" | "timezone" | "patternName" | "issueId" | "parentIssueIds" | "patternId">;
