import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare function makeFactories(TimestampKlass: typeof FakeTimestamp): {
    applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>;
    challengeFactory: import("factory.ts").Factory<import("..").ChallengeValue, keyof import("..").ChallengeValue>;
    commentFactory: import("factory.ts").Factory<import("..").CommentValue, keyof import("..").CommentValue>;
    impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "gameplans" | "type" | "outcome" | "patternId" | "debriefNotes" | keyof import("..").BaseLogValue | "setAsActiveImpulse" | "pressCount" | "isDisplayable" | "buttonPressSecondsSinceEpoch" | "patterns" | "patternIds" | "patternUsage" | "debriefReminderSentAt" | "debriefedAt">;
    timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "type" | keyof import("..").BaseLogValue | "isDisplayable" | "gameplanId">;
    motionLogFactory: import("factory.ts").Factory<import("..").MotionLogValue, "type" | keyof import("..").BaseLogValue | "isDisplayable">;
    debriefLogFactory: import("factory.ts").Factory<import("..").DebriefLogValue, "type" | "outcome" | keyof import("..").BaseLogValue | "isDisplayable" | "patterns" | "patternIds" | "patternUsage" | "gameplanId" | "patternUsageEntries">;
    locationFactory: import("factory.ts").Factory<import("..").LocationValue, keyof import("..").LocationValue>;
    logSummaryFactory: import("factory.ts").Factory<import("..").LogSummaryValue, keyof import("..").LogSummaryValue>;
    profileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>;
    issueFactory: import("factory.ts").Factory<import("..").IssueValue, keyof import("..").IssueValue>;
    adminProfileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>;
    supportGroupFactory: import("factory.ts").Factory<import("..").SupportGroupValue, keyof import("..").SupportGroupValue>;
    patternGameplanFactory: import("factory.ts").Factory<import("..").ImpulseGameplanValue, "type" | "createdAt" | "updatedAt" | "uid" | "isTemplate" | keyof import("..").Gameplan | "title" | "navigationTitle" | "tacticsUpdatedAt" | "patternId">;
    debriefGameplanFactory: import("factory.ts").Factory<import("..").ImpulseGameplanValue, "type" | "createdAt" | "updatedAt" | "uid" | "isTemplate" | keyof import("..").Gameplan | "title" | "navigationTitle" | "tacticsUpdatedAt" | "patternId">;
    timeGameplanFactory: import("factory.ts").Factory<import("..").TimeGameplanValue, "type" | "hour" | "minute" | "createdAt" | "updatedAt" | "uid" | "isTemplate" | keyof import("..").Gameplan | "title" | "navigationTitle" | "tacticsUpdatedAt" | "weekdays" | "timezone" | "scheduledNotificationIds">;
    patternFactory: import("factory.ts").Factory<import("..").PatternValue, keyof import("..").PatternValue>;
    locationGameplanFactory: import("factory.ts").Factory<import("..").LocationGameplanValue, "type" | "createdAt" | "updatedAt" | "uid" | "isTemplate" | keyof import("..").Gameplan | "title" | "navigationTitle" | "tacticsUpdatedAt" | "locationId" | "mode">;
    tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "type" | "createdAt" | "updatedAt" | "uid" | "ordinal" | "isTemplate" | "title" | "description" | "image" | "backgroundColor" | "language" | "href" | "categoryIds" | "isShared">;
};
export declare const applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>, challengeFactory: import("factory.ts").Factory<import("..").ChallengeValue, keyof import("..").ChallengeValue>, commentFactory: import("factory.ts").Factory<import("..").CommentValue, keyof import("..").CommentValue>, impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "gameplans" | "type" | "outcome" | "patternId" | "debriefNotes" | keyof import("..").BaseLogValue | "setAsActiveImpulse" | "pressCount" | "isDisplayable" | "buttonPressSecondsSinceEpoch" | "patterns" | "patternIds" | "patternUsage" | "debriefReminderSentAt" | "debriefedAt">, timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "type" | keyof import("..").BaseLogValue | "isDisplayable" | "gameplanId">, motionLogFactory: import("factory.ts").Factory<import("..").MotionLogValue, "type" | keyof import("..").BaseLogValue | "isDisplayable">, debriefLogFactory: import("factory.ts").Factory<import("..").DebriefLogValue, "type" | "outcome" | keyof import("..").BaseLogValue | "isDisplayable" | "patterns" | "patternIds" | "patternUsage" | "gameplanId" | "patternUsageEntries">, logSummaryFactory: import("factory.ts").Factory<import("..").LogSummaryValue, keyof import("..").LogSummaryValue>, debriefGameplanFactory: import("factory.ts").Factory<import("..").ImpulseGameplanValue, "type" | "createdAt" | "updatedAt" | "uid" | "isTemplate" | keyof import("..").Gameplan | "title" | "navigationTitle" | "tacticsUpdatedAt" | "patternId">, profileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>, supportGroupFactory: import("factory.ts").Factory<import("..").SupportGroupValue, keyof import("..").SupportGroupValue>, tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "type" | "createdAt" | "updatedAt" | "uid" | "ordinal" | "isTemplate" | "title" | "description" | "image" | "backgroundColor" | "language" | "href" | "categoryIds" | "isShared">;
