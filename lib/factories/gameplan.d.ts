import * as Factory from 'factory.ts';
import { ImpulseGameplanValue, LocationGameplanValue, TimeGameplanValue } from '../schema/gameplan';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeImpulseGameplanFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<ImpulseGameplanValue, "type" | "createdAt" | "updatedAt" | "uid" | keyof import("../schema/gameplan").Gameplan | "title" | "navigationTitle" | "isTemplate" | "tacticsUpdatedAt" | "timezone" | "patternName" | "patternId">;
export declare const makeLocationGameplanFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<LocationGameplanValue, "type" | "createdAt" | "updatedAt" | "uid" | keyof import("../schema/gameplan").Gameplan | "title" | "navigationTitle" | "isTemplate" | "tacticsUpdatedAt" | "timezone" | "patternName" | "locationId" | "mode">;
export declare const makeTimeGameplanFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<TimeGameplanValue, "type" | "hour" | "minute" | "createdAt" | "updatedAt" | "uid" | keyof import("../schema/gameplan").Gameplan | "title" | "navigationTitle" | "isTemplate" | "tacticsUpdatedAt" | "timezone" | "patternName" | "weekdays" | "scheduledNotificationIds">;
export declare const makeSetbackGameplanFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<ImpulseGameplanValue, "type" | "createdAt" | "updatedAt" | "uid" | keyof import("../schema/gameplan").Gameplan | "title" | "navigationTitle" | "isTemplate" | "tacticsUpdatedAt" | "timezone" | "patternName" | "patternId">;
export declare const makeSuccessGameplanFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<ImpulseGameplanValue, "type" | "createdAt" | "updatedAt" | "uid" | keyof import("../schema/gameplan").Gameplan | "title" | "navigationTitle" | "isTemplate" | "tacticsUpdatedAt" | "timezone" | "patternName" | "patternId">;
