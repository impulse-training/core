export declare const applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>, commentFactory: import("factory.ts").Factory<{
    createdAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    tacticId?: string | null | undefined;
    tacticName?: string | null | undefined;
    text?: string | undefined;
    recording?: {
        waveform?: string | null | undefined;
        localFilePath: string;
        remoteFilePath: string;
    } | undefined;
    isEdited?: boolean | undefined;
    avatar?: {
        localFilePath?: import("yup").Maybe<string | undefined>;
        storagePath?: import("yup").Maybe<string | undefined>;
        uri?: import("yup").Maybe<string | undefined>;
    } | undefined;
    uid: string;
    authorName: string;
}, "uid" | "authorName" | ("createdAt" | "updatedAt" | "tacticId" | "tacticName" | "text" | "recording" | "isEdited" | "avatar")>, impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "createdAt" | "updatedAt" | "uid" | "timezone" | "type" | "location" | "tacticsById" | "steps" | "patternsById" | "startTime" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenTacticIds" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "setAsActiveImpulse" | "pressCount" | "isDisplayable" | "buttonPressSecondsSinceEpoch" | "gameplan" | "outcome" | "patternId" | "debriefNotes" | "debriefReminderSentAt" | "debriefedAt">, timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "createdAt" | "updatedAt" | "uid" | "timezone" | "type" | "location" | "tacticsById" | "steps" | "startTime" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenTacticIds" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable" | "routineId">, motionLogFactory: import("factory.ts").Factory<import("..").MotionLogValue, "createdAt" | "updatedAt" | "uid" | "timezone" | "type" | "location" | "tacticsById" | "steps" | "startTime" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenTacticIds" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable">, recommendationFactory: import("factory.ts").Factory<import("..").RecommendationValue, "createdAt" | "updatedAt" | "uid" | "ordinal" | "title" | "tacticIds" | "tacticsById" | "routine" | "routineExplanation" | "recommenderUid" | "recommenderName" | "appliedAt" | "dismissedAt" | "property" | "ruleId" | "patternIds">, debriefLogFactory: import("factory.ts").Factory<import("..").DebriefLogValue, "createdAt" | "updatedAt" | "uid" | "timezone" | "type" | "location" | "tacticsById" | "steps" | "patternsById" | "startTime" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenTacticIds" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable" | "routineId" | "tacticDataEntries">, debriefRoutineFactory: import("factory.ts").Factory<{
    createdAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    isTemplate?: boolean | null | undefined;
    scheduledNotificationIds?: any[] | undefined;
    uid: string;
    title: string;
    summary: string;
    timezone: string;
    type: "dayDebrief";
    weekdays: any[];
    hour: number;
    minute: number;
}, "uid" | "title" | "summary" | "timezone" | "type" | "weekdays" | "hour" | "minute" | ("createdAt" | "updatedAt" | "isTemplate" | "scheduledNotificationIds")>, profileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>, supportGroupFactory: import("factory.ts").Factory<{
    createdAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
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
    suggestedTacticIds: {};
    thumbnailUrl: string;
    participantUids: any[];
    groupName: string;
    creatorName: string;
    creatorUid: string;
    icon: {};
    unreadCounts: {
        [x: string]: number;
    };
    permissions: {};
}, "suggestedTacticIds" | "thumbnailUrl" | "participantUids" | "groupName" | "creatorName" | "creatorUid" | "icon" | "unreadCounts" | "permissions" | ("createdAt" | "updatedAt" | "isTemplate" | "slug" | "templateId" | "everythingPermissions" | "memberTargetCount" | "groupNameAliases" | "groupDescription" | "lastMessagePreview" | "invitationCode" | "invitationUrl" | "lastMessageUid" | "isSharingDisabled")>, tacticFactory: import("factory.ts").Factory<{
    createdAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    uid?: string | null | undefined;
    ordinal?: number | null | undefined;
    isTemplate?: boolean | null | undefined;
    sourceId?: string | undefined;
    subtitle?: import("yup").Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: import("yup").Maybe<string | undefined>;
        storagePath?: import("yup").Maybe<string | undefined>;
        uri?: import("yup").Maybe<string | undefined>;
    } | null | undefined;
    language?: string | null | undefined;
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: import("yup").Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    numberOfLikes?: number | null | undefined;
    isSuggested?: boolean | undefined;
    title: string;
    type: "phone";
    backgroundColor: string;
    supportGroupId: string;
    trigger: {};
} | {
    createdAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    uid?: string | null | undefined;
    ordinal?: number | null | undefined;
    isTemplate?: boolean | null | undefined;
    sourceId?: string | undefined;
    subtitle?: import("yup").Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: import("yup").Maybe<string | undefined>;
        storagePath?: import("yup").Maybe<string | undefined>;
        uri?: import("yup").Maybe<string | undefined>;
    } | null | undefined;
    language?: string | null | undefined;
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: import("yup").Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    numberOfLikes?: number | null | undefined;
    isSuggested?: boolean | undefined;
    recording: {
        waveform?: string | null | undefined;
        localFilePath: string;
        remoteFilePath: string;
    };
    title: string;
    type: "audio";
    backgroundColor: string;
} | {
    createdAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    uid?: string | null | undefined;
    ordinal?: number | null | undefined;
    isTemplate?: boolean | null | undefined;
    sourceId?: string | undefined;
    subtitle?: import("yup").Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: import("yup").Maybe<string | undefined>;
        storagePath?: import("yup").Maybe<string | undefined>;
        uri?: import("yup").Maybe<string | undefined>;
    } | null | undefined;
    language?: string | null | undefined;
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: import("yup").Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    numberOfLikes?: number | null | undefined;
    isSuggested?: boolean | undefined;
    title: string;
    type: "urge-surfing";
    backgroundColor: string;
} | {
    createdAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    uid?: string | null | undefined;
    ordinal?: number | null | undefined;
    isTemplate?: boolean | null | undefined;
    sourceId?: string | undefined;
    subtitle?: import("yup").Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: import("yup").Maybe<string | undefined>;
        storagePath?: import("yup").Maybe<string | undefined>;
        uri?: import("yup").Maybe<string | undefined>;
    } | null | undefined;
    language?: string | null | undefined;
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: import("yup").Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    numberOfLikes?: number | null | undefined;
    isSuggested?: boolean | undefined;
    title: string;
    type: "video";
    backgroundColor: string;
    video: {
        storagePath?: string | null | undefined;
        url?: string | null | undefined;
        title: string;
        description: string;
        thumbnailUrl: string;
        duration: number;
    };
} | {
    createdAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    uid?: string | null | undefined;
    ordinal?: number | null | undefined;
    isTemplate?: boolean | null | undefined;
    sourceId?: string | undefined;
    subtitle?: import("yup").Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: import("yup").Maybe<string | undefined>;
        storagePath?: import("yup").Maybe<string | undefined>;
        uri?: import("yup").Maybe<string | undefined>;
    } | null | undefined;
    language?: string | null | undefined;
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: import("yup").Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    numberOfLikes?: number | null | undefined;
    isSuggested?: boolean | undefined;
    title: string;
    type: "question";
    backgroundColor: string;
} | {
    createdAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    uid?: string | null | undefined;
    ordinal?: number | null | undefined;
    isTemplate?: boolean | null | undefined;
    sourceId?: string | undefined;
    subtitle?: import("yup").Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: import("yup").Maybe<string | undefined>;
        storagePath?: import("yup").Maybe<string | undefined>;
        uri?: import("yup").Maybe<string | undefined>;
    } | null | undefined;
    language?: string | null | undefined;
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: import("yup").Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    numberOfLikes?: number | null | undefined;
    isSuggested?: boolean | undefined;
    title: string;
    type: "task";
    backgroundColor: string;
} | import("..").MeasureTacticValue | {
    createdAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    uid?: string | null | undefined;
    ordinal?: number | null | undefined;
    isTemplate?: boolean | null | undefined;
    repeat?: import("yup").Maybe<number | undefined>;
    sourceId?: string | undefined;
    subtitle?: import("yup").Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: import("yup").Maybe<string | undefined>;
        storagePath?: import("yup").Maybe<string | undefined>;
        uri?: import("yup").Maybe<string | undefined>;
    } | null | undefined;
    language?: string | null | undefined;
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: import("yup").Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    numberOfLikes?: number | null | undefined;
    isSuggested?: boolean | undefined;
    title: string;
    type: "breathe";
    backgroundColor: string;
    inFor: number;
    holdFor: number;
    outFor: number;
} | {
    createdAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    uid?: string | null | undefined;
    ordinal?: number | null | undefined;
    isTemplate?: boolean | null | undefined;
    sourceId?: string | undefined;
    subtitle?: import("yup").Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: import("yup").Maybe<string | undefined>;
        storagePath?: import("yup").Maybe<string | undefined>;
        uri?: import("yup").Maybe<string | undefined>;
    } | null | undefined;
    language?: string | null | undefined;
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: import("yup").Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    numberOfLikes?: number | null | undefined;
    isSuggested?: boolean | undefined;
    title: string;
    type: "steps";
    backgroundColor: string;
    steps: number;
} | {
    createdAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    uid?: string | null | undefined;
    ordinal?: number | null | undefined;
    isTemplate?: boolean | null | undefined;
    sourceId?: string | undefined;
    subtitle?: import("yup").Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: import("yup").Maybe<string | undefined>;
        storagePath?: import("yup").Maybe<string | undefined>;
        uri?: import("yup").Maybe<string | undefined>;
    } | null | undefined;
    language?: string | null | undefined;
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: import("yup").Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    numberOfLikes?: number | null | undefined;
    isSuggested?: boolean | undefined;
    title: string;
    type: "emotions";
    backgroundColor: string;
}, "createdAt" | "updatedAt" | "uid" | "ordinal" | "title" | "isTemplate" | "type" | "sourceId" | "subtitle" | "description" | "image" | "backgroundColor" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested">, recommendationRuleFactory: import("factory.ts").Factory<import("..").RecommendationRuleValue, "createdAt" | "updatedAt" | "uid" | "ordinal" | "recommendation" | "forIssueIds" | ("issueNames" | "issueNamesSummary" | "recommendationSummary")>;
