export declare const applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>, commentFactory: import("factory.ts").Factory<import("..").CommentValue, keyof import("..").CommentValue>, impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "timezone" | "patternId" | "location" | "startTime" | "locationIsFetching" | "gameplan" | "gameplans" | "isDisplayable" | "patterns" | "patternIds" | ("steps" | "tacticsById" | "suggestedTacticIds" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticData" | "sharedWithSupportGroupIds" | "setAsActiveImpulse" | "pressCount" | "buttonPressSecondsSinceEpoch" | "debriefNotes" | "debriefReminderSentAt" | "debriefedAt")>, timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "timezone" | "location" | "gameplanId" | "startTime" | "locationIsFetching" | "gameplan" | "gameplans" | "isDisplayable" | ("steps" | "tacticsById" | "suggestedTacticIds" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticData" | "sharedWithSupportGroupIds")>, motionLogFactory: import("factory.ts").Factory<import("..").MotionLogValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "timezone" | "location" | "startTime" | "locationIsFetching" | "gameplan" | "gameplans" | "isDisplayable" | ("steps" | "tacticsById" | "suggestedTacticIds" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticData" | "sharedWithSupportGroupIds")>, recommendationFactory: import("factory.ts").Factory<import("..").RecommendationValue, "uid" | "ordinal" | "createdAt" | "updatedAt" | "title" | "tacticIds" | "tacticsById" | "appliedAt" | "dismissedAt" | "explanation" | "gameplanExplanation" | "recommenderUid" | "recommenderName" | "ruleId" | "gameplanIds" | "defaultSelected">, debriefLogFactory: import("factory.ts").Factory<import("..").DebriefLogValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "timezone" | "location" | "gameplanId" | "startTime" | "locationIsFetching" | "gameplan" | "gameplans" | "isDisplayable" | "patterns" | "patternIds" | "tacticDataEntries" | ("steps" | "tacticsById" | "suggestedTacticIds" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticData" | "sharedWithSupportGroupIds")>, logSummaryFactory: import("factory.ts").Factory<import("..").LogSummaryValue, keyof import("..").LogSummaryValue>, debriefGameplanFactory: import("factory.ts").Factory<import("..").DayDebriefGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "tacticsById" | "suggestedTacticIds" | ("title" | "isTemplate" | "navigationTitle" | "timezone" | "patternName" | "issueId" | "parentIssueIds")>, profileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>, supportGroupFactory: import("factory.ts").Factory<{
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
    participantUids: string[];
    groupName: string;
    creatorName: string;
    creatorUid: string;
    icon: {};
    unreadCounts: {
        [x: string]: number;
    };
    permissions: {};
}, "createdAt" | "updatedAt" | "thumbnailUrl" | "suggestedTacticIds" | "participantUids" | "groupName" | "creatorName" | "creatorUid" | "icon" | "unreadCounts" | "permissions" | ("isTemplate" | "slug" | "templateId" | "everythingPermissions" | "memberTargetCount" | "groupNameAliases" | "groupDescription" | "lastMessagePreview" | "invitationCode" | "invitationUrl" | "lastMessageUid" | "isSharingDisabled")>, tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "type" | "uid" | "ordinal" | "createdAt" | "updatedAt" | "title" | "description" | "image" | "backgroundColor" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "isAvailableForRecommendation">, recommendationRuleFactory: import("factory.ts").Factory<import("..").RecommendationRuleValue, keyof import("..").RecommendationRuleValue>;
