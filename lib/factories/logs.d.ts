import * as Factory from 'factory.ts';
import { DebriefLogValue, ImpulseLogValue, LocationLogValue, MotionLogValue, TimeLogValue } from '../schema/logs';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeImpulseFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<ImpulseLogValue, "gameplans" | "type" | "outcome" | "patternId" | "debriefNotes" | keyof import("../schema/logs").BaseLogValue | "setAsActiveImpulse" | "pressCount" | "isDisplayable" | "buttonPressSecondsSinceEpoch" | "patterns" | "patternIds" | "patternUsage" | "debriefReminderSentAt" | "debriefedAt">;
export declare const makeTimeLogFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<TimeLogValue, "type" | "gameplanId" | keyof import("../schema/logs").BaseLogValue | "isDisplayable">;
export declare const makeDebriefLogFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<DebriefLogValue, "type" | "outcome" | "gameplanId" | keyof import("../schema/logs").BaseLogValue | "isDisplayable" | "patterns" | "patternIds" | "patternUsage" | "patternUsageEntries">;
export declare const makeMotionLogFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<MotionLogValue, "type" | keyof import("../schema/logs").BaseLogValue | "isDisplayable">;
export declare const makeLocationLogFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<LocationLogValue, "type" | "locationMode" | "locationId" | keyof import("../schema/logs").BaseLogValue | "isDisplayable" | "locationName">;
