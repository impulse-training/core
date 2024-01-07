import * as Factory from 'factory.ts';
import { ImpulseGameplanValue, LocationGameplanValue, TimeGameplanValue } from '../schema/gameplan';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeImpulseGameplanFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<ImpulseGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "title" | keyof import("../schema/gameplan").Gameplan | "navigationTitle" | "isTemplate" | "tacticsUpdatedAt" | "timezone" | "patternName" | "patternId">;
export declare const makeLocationGameplanFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<LocationGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "title" | keyof import("../schema/gameplan").Gameplan | "navigationTitle" | "isTemplate" | "tacticsUpdatedAt" | "timezone" | "patternName" | "locationId" | "mode">;
export declare const makeTimeGameplanFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<TimeGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "title" | "hour" | "minute" | keyof import("../schema/gameplan").Gameplan | "navigationTitle" | "isTemplate" | "tacticsUpdatedAt" | "timezone" | "patternName" | "weekdays" | "scheduledNotificationIds">;
export declare const makeSetbackGameplanFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<ImpulseGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "title" | keyof import("../schema/gameplan").Gameplan | "navigationTitle" | "isTemplate" | "tacticsUpdatedAt" | "timezone" | "patternName" | "patternId">;
export declare const makeSuccessGameplanFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<ImpulseGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "title" | keyof import("../schema/gameplan").Gameplan | "navigationTitle" | "isTemplate" | "tacticsUpdatedAt" | "timezone" | "patternName" | "patternId">;
