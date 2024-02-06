import { TimestampLike } from '../utils/TimestampLike';
export declare function makeFactories(TimestampKlass: typeof TimestampLike): {
    applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>;
    commentFactory: import("factory.ts").Factory<import("..").CommentValue, keyof import("..").CommentValue>;
    impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "timezone" | "patternId" | "location" | "startTime" | "locationIsFetching" | "tactics" | "gameplan" | "gameplans" | "isDisplayable" | "patterns" | "patternIds" | ("steps" | "tacticsById" | "suggestedTacticIds" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticData" | "sharedWithSupportGroupIds" | "setAsActiveImpulse" | "pressCount" | "buttonPressSecondsSinceEpoch" | "debriefNotes" | "debriefReminderSentAt" | "debriefedAt")>;
    timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "timezone" | "location" | "gameplanId" | "startTime" | "locationIsFetching" | "tactics" | "gameplan" | "gameplans" | "isDisplayable" | ("steps" | "tacticsById" | "suggestedTacticIds" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticData" | "sharedWithSupportGroupIds")>;
    motionLogFactory: import("factory.ts").Factory<import("..").MotionLogValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "timezone" | "location" | "startTime" | "locationIsFetching" | "tactics" | "gameplan" | "gameplans" | "isDisplayable" | ("steps" | "tacticsById" | "suggestedTacticIds" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticData" | "sharedWithSupportGroupIds")>;
    locationLogFactory: import("factory.ts").Factory<import("..").LocationLogValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "timezone" | "location" | "locationId" | "startTime" | "locationIsFetching" | "tactics" | "gameplan" | "gameplans" | "isDisplayable" | "locationName" | "locationMode" | ("steps" | "tacticsById" | "suggestedTacticIds" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticData" | "sharedWithSupportGroupIds")>;
    debriefLogFactory: import("factory.ts").Factory<import("..").DebriefLogValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "timezone" | "location" | "gameplanId" | "startTime" | "locationIsFetching" | "tactics" | "gameplan" | "gameplans" | "isDisplayable" | "patterns" | "patternIds" | "tacticDataEntries" | ("steps" | "tacticsById" | "suggestedTacticIds" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticData" | "sharedWithSupportGroupIds")>;
    locationFactory: import("factory.ts").Factory<import("..").LocationValue, keyof import("..").LocationValue>;
    logSummaryFactory: import("factory.ts").Factory<import("..").LogSummaryValue, keyof import("..").LogSummaryValue>;
    profileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>;
    issueFactory: import("factory.ts").Factory<import("..").IssueValue, keyof import("..").IssueValue>;
    adminProfileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>;
    supportGroupFactory: import("factory.ts").Factory<{
        isTemplate?: boolean | undefined;
        slug?: string | undefined;
        templateId?: string | undefined;
        everythingPermissions?: boolean | undefined;
        memberTargetCount?: number | undefined;
        groupNameAliases?: {
            [x: string]: string | undefined;
        } | undefined;
        groupDescription?: string | undefined;
        lastMessagePreview?: string | undefined;
        invitationCode?: string | undefined;
        invitationUrl?: string | undefined;
        lastMessageUid?: string | undefined;
        isSharingDisabled?: boolean | undefined;
        createdAt: {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        updatedAt: {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        thumbnailUrl: string;
        suggestedTacticIds: {};
        participantUids: (string | undefined)[];
        groupName: string;
        creatorName: string;
        creatorUid: string;
        icon: {};
        unreadCounts: {};
        permissions: {};
    }, "createdAt" | "updatedAt" | "thumbnailUrl" | "suggestedTacticIds" | "participantUids" | "groupName" | "creatorName" | "creatorUid" | "icon" | "unreadCounts" | "permissions" | ("isTemplate" | "slug" | "templateId" | "everythingPermissions" | "memberTargetCount" | "groupNameAliases" | "groupDescription" | "lastMessagePreview" | "invitationCode" | "invitationUrl" | "lastMessageUid" | "isSharingDisabled")>;
    impulseGameplanFactory: import("factory.ts").Factory<import("..").ImpulseGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "tacticsById" | "suggestedTacticIds" | "patternId" | ("title" | "isTemplate" | "navigationTitle" | "timezone" | "patternName" | "issueId" | "parentIssueIds")>;
    debriefGameplanFactory: import("factory.ts").Factory<import("..").DayDebriefGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "tacticsById" | "suggestedTacticIds" | ("title" | "isTemplate" | "navigationTitle" | "timezone" | "patternName" | "issueId" | "parentIssueIds")>;
    messageFactory: import("factory.ts").Factory<import("..").MessageValue, keyof import("..").MessageValue>;
    timeGameplanFactory: import("factory.ts").Factory<import("..").TimeGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "tacticsById" | "suggestedTacticIds" | "timezone" | "weekdays" | "hour" | "minute" | ("title" | "isTemplate" | "navigationTitle" | "patternName" | "issueId" | "parentIssueIds" | "scheduledNotificationIds")>;
    patternFactory: import("factory.ts").Factory<{
        issueId?: import("yup").Maybe<string | undefined>;
        supportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
        notification?: {
            title: string;
            body: string;
        } | null | undefined;
        gameplanId?: import("yup").Maybe<string | undefined>;
        debriefGameplanId?: import("yup").Maybe<string | undefined>;
        uid: string;
        ordinal: number;
        createdAt: {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        updatedAt: {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        name: string;
        sendWeeklyReports: NonNullable<boolean | undefined>;
        setbackThreshold: number;
    }, "uid" | "ordinal" | "createdAt" | "updatedAt" | "name" | "sendWeeklyReports" | "setbackThreshold" | ("issueId" | "supportGroupIds" | "notification" | "gameplanId" | "debriefGameplanId")>;
    locationGameplanFactory: import("factory.ts").Factory<import("..").LocationGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "tacticsById" | "suggestedTacticIds" | "mode" | ("title" | "isTemplate" | "navigationTitle" | "timezone" | "patternName" | "issueId" | "parentIssueIds" | "locationId")>;
    recommendationFactory: import("factory.ts").Factory<import("..").RecommendationValue, "uid" | "ordinal" | "createdAt" | "updatedAt" | "title" | "tacticIds" | "tacticsById" | "appliedAt" | "dismissedAt" | "explanation" | "gameplanExplanation" | "recommenderUid" | "recommenderName" | "ruleId" | "gameplanIds" | "defaultSelected">;
    recommendationRuleFactory: import("factory.ts").Factory<import("..").RecommendationRuleValue, keyof import("..").RecommendationRuleValue>;
    newGameplanRecommendationRuleFactory: import("factory.ts").Factory<import("..").RecommendationRuleValue, keyof import("..").RecommendationRuleValue>;
    tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "type" | "uid" | "ordinal" | "createdAt" | "updatedAt" | "title" | "description" | "image" | "backgroundColor" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "isAvailableForRecommendation">;
};
