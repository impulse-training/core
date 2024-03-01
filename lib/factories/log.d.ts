import * as Factory from 'factory.ts';
import { DebriefLogValue, ImpulseLogValue, LocationLogValue, MotionLogValue, TimeLogValue } from '../schema/logs';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeImpulseFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<ImpulseLogValue, "createdAt" | "updatedAt" | "uid" | "timezone" | "type" | "location" | "tacticsById" | "steps" | "patternsById" | "startTime" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenTacticIds" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "setAsActiveImpulse" | "pressCount" | "isDisplayable" | "buttonPressSecondsSinceEpoch" | "gameplan" | "outcome" | "patternId" | "debriefNotes" | "debriefReminderSentAt" | "debriefedAt">;
export declare const makeTimeLogFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<TimeLogValue, "createdAt" | "updatedAt" | "uid" | "timezone" | "type" | "location" | "tacticsById" | "steps" | "startTime" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenTacticIds" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable" | "routineId">;
export declare const makeDebriefLogFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<DebriefLogValue, "createdAt" | "updatedAt" | "uid" | "timezone" | "type" | "location" | "tacticsById" | "steps" | "patternsById" | "startTime" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenTacticIds" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable" | "routineId" | "tacticDataEntries">;
export declare const makeMotionLogFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<MotionLogValue, "createdAt" | "updatedAt" | "uid" | "timezone" | "type" | "location" | "tacticsById" | "steps" | "startTime" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenTacticIds" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable">;
export declare const makeLocationLogFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<LocationLogValue, "createdAt" | "updatedAt" | "uid" | "timezone" | "type" | "location" | "locationId" | "tacticsById" | "steps" | "startTime" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenTacticIds" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable" | "locationName" | "locationMode">;
