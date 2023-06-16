import * as Factory from 'factory.ts';
import { LocationGameplanValue, TimeGameplanValue } from '../schema/gameplan';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeLocationGameplanFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<LocationGameplanValue, "type" | keyof import("../schema/gameplan").GameplanValueBase | "locationId" | "mode">;
export declare const makeTimeGameplanFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<TimeGameplanValue, "type" | "hour" | "minute" | keyof import("../schema/gameplan").GameplanValueBase | "weekdays" | "timezone" | "scheduledNotificationIds">;
