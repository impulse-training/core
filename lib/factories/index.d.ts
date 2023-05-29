import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare function makeFactories(TimestampKlass: typeof FakeTimestamp): {
    applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>;
    challengeFactory: import("factory.ts").Factory<import("..").ChallengeValue, keyof import("..").ChallengeValue>;
    impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "type" | "outcome" | "debriefNotes" | keyof import("../schema/logs").BaseLogValue | "pressCount" | "isDisplayable" | "buttonPressSecondsSinceEpoch" | "patterns" | "patternId" | "patternIds" | "patternUsage" | "debriefReminderSentAt" | "debriefedAt">;
    tacticsLogFactory: import("factory.ts").Factory<import("..").TacticsLogValue, "type" | keyof import("../schema/logs").BaseLogValue | "isDisplayable">;
    timeLogFactory: import("factory.ts").Factory<import("../schema/logs").TimeLogValue, "type" | keyof import("../schema/logs").BaseLogValue | "isDisplayable" | "reminderId">;
    motionLogFactory: import("factory.ts").Factory<import("../schema/logs").MotionLogValue, "type" | keyof import("../schema/logs").BaseLogValue | "isDisplayable">;
    locationFactory: import("factory.ts").Factory<import("..").LocationValue, keyof import("..").LocationValue>;
    logSummaryFactory: import("factory.ts").Factory<import("..").LogSummaryValue, keyof import("..").LogSummaryValue>;
    profileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>;
    adminProfileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>;
    supportGroupFactory: import("factory.ts").Factory<import("..").SupportGroupValue, keyof import("..").SupportGroupValue>;
    timeReminderFactory: import("factory.ts").Factory<import("../schema/reminder").TimeReminderValue, "type" | "hour" | "minute" | "timezone" | keyof import("../schema/reminder").ReminderValueBase | "weekdays" | "scheduledNotificationIds">;
    patternFactory: import("factory.ts").Factory<import("..").PatternValue, keyof import("..").PatternValue>;
    locationReminderFactory: import("factory.ts").Factory<import("../schema/reminder").LocationReminderValue, "type" | "locationId" | keyof import("../schema/reminder").ReminderValueBase | "mode">;
    tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "type" | "createdAt" | "updatedAt" | "uid" | "ordinal" | "isTemplate" | "originalId" | "title" | "description" | "image" | "language" | "href" | "isBooster" | "tagsSummary" | "featuredCategory" | "showResponseBox" | "deviceTimeRemindersDigest" | "deviceLocationRemindersDigest" | "dataDigest" | "checkInEntries">;
    tagFactory: import("factory.ts").Factory<import("..").TagValue, keyof import("..").TagValue>;
};
export declare const applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>, challengeFactory: import("factory.ts").Factory<import("..").ChallengeValue, keyof import("..").ChallengeValue>, impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "type" | "outcome" | "debriefNotes" | keyof import("../schema/logs").BaseLogValue | "pressCount" | "isDisplayable" | "buttonPressSecondsSinceEpoch" | "patterns" | "patternId" | "patternIds" | "patternUsage" | "debriefReminderSentAt" | "debriefedAt">, tacticsLogFactory: import("factory.ts").Factory<import("..").TacticsLogValue, "type" | keyof import("../schema/logs").BaseLogValue | "isDisplayable">, timeLogFactory: import("factory.ts").Factory<import("../schema/logs").TimeLogValue, "type" | keyof import("../schema/logs").BaseLogValue | "isDisplayable" | "reminderId">, motionLogFactory: import("factory.ts").Factory<import("../schema/logs").MotionLogValue, "type" | keyof import("../schema/logs").BaseLogValue | "isDisplayable">, logSummaryFactory: import("factory.ts").Factory<import("..").LogSummaryValue, keyof import("..").LogSummaryValue>, profileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>, supportGroupFactory: import("factory.ts").Factory<import("..").SupportGroupValue, keyof import("..").SupportGroupValue>, tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "type" | "createdAt" | "updatedAt" | "uid" | "ordinal" | "isTemplate" | "originalId" | "title" | "description" | "image" | "language" | "href" | "isBooster" | "tagsSummary" | "featuredCategory" | "showResponseBox" | "deviceTimeRemindersDigest" | "deviceLocationRemindersDigest" | "dataDigest" | "checkInEntries">, tagFactory: import("factory.ts").Factory<import("..").TagValue, keyof import("..").TagValue>;
