import * as Factory from 'factory.ts';
import { ImpulseLogValue, LocationLogValue, TimeLogValue } from '../schema/log';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeImpulseLogFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<ImpulseLogValue, "profileId" | "type" | "tacticsById" | "startTime" | "timezone" | "tacticIds" | "tacticData" | ("createdAt" | "updatedAt" | "issueId" | "parentIssueIds" | "tacticLikes" | "debriefAfter" | "debriefReminderSentAt" | "debriefedAt")>;
export declare const makeTimeLogFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<TimeLogValue, "profileId" | "type" | "tacticsById" | "startTime" | "timezone" | "tacticIds" | "tacticData" | ("createdAt" | "updatedAt" | "issueId" | "parentIssueIds" | "tacticLikes")>;
export declare const makeLocationLogFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<LocationLogValue, "profileId" | "type" | "tacticsById" | "startTime" | "timezone" | "tacticIds" | "tacticData" | "locationId" | "isDisplayable" | "locationName" | "locationMode" | ("createdAt" | "updatedAt" | "issueId" | "parentIssueIds" | "tacticLikes")>;
