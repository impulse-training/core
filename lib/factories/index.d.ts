import { TimestampLike } from '../utils/TimestampLike';
export declare function makeFactories(TimestampKlass: typeof TimestampLike): {
    applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>;
    commentFactory: import("factory.ts").Factory<{
        createdAt?: TimestampLike | import("yup").Maybe<null>;
        updatedAt?: TimestampLike | import("yup").Maybe<null>;
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
    }, "uid" | "authorName" | ("createdAt" | "updatedAt" | "tacticId" | "tacticName" | "text" | "recording" | "isEdited" | "avatar")>;
    impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "createdAt" | "updatedAt" | "uid" | "type" | "tacticsById" | "steps" | "timezone" | "location" | "patternsById" | "startTime" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenTacticIds" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "setAsActiveImpulse" | "pressCount" | "isDisplayable" | "buttonPressSecondsSinceEpoch" | "gameplan" | "outcome" | "patternId" | "debriefNotes" | "debriefReminderSentAt" | "debriefedAt">;
    timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "createdAt" | "updatedAt" | "uid" | "type" | "tacticsById" | "steps" | "timezone" | "location" | "startTime" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenTacticIds" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable">;
    motionLogFactory: import("factory.ts").Factory<import("..").MotionLogValue, "createdAt" | "updatedAt" | "uid" | "type" | "tacticsById" | "steps" | "timezone" | "location" | "startTime" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenTacticIds" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable">;
    locationLogFactory: import("factory.ts").Factory<import("..").LocationLogValue, "createdAt" | "updatedAt" | "uid" | "type" | "tacticsById" | "steps" | "locationId" | "timezone" | "location" | "startTime" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenTacticIds" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable" | "locationName" | "locationMode">;
    recapLogFactory: import("factory.ts").Factory<import("..").RecapLogValue, "createdAt" | "updatedAt" | "uid" | "type" | "tacticsById" | "steps" | "timezone" | "location" | "startTime" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenTacticIds" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable">;
    locationFactory: import("factory.ts").Factory<{
        createdAt?: TimestampLike | import("yup").Maybe<null>;
        updatedAt?: TimestampLike | import("yup").Maybe<null>;
        latitude?: number | undefined;
        longitude?: number | undefined;
        uid: string;
        name: string;
        address: string;
    }, "uid" | "name" | "address" | ("createdAt" | "updatedAt" | "latitude" | "longitude")>;
    profileFactory: import("factory.ts").Factory<{
        avatar?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | undefined;
        parentIssueIds?: (string | undefined)[] | undefined;
        timezone?: string | undefined;
        buttonId?: string | undefined;
        isAdmin?: boolean | undefined;
        isSuperAdmin?: boolean | undefined;
        activeImpulseId?: string | undefined;
        currentAppState?: import("react-native/types").AppStateStatus | undefined;
        showStorybook?: boolean | undefined;
        lastActiveAt?: Date | undefined;
        expoPushToken?: string | undefined;
        releaseChannel?: "default" | "canary" | undefined;
        notificationPreferences?: {
            [x: string]: NonNullable<"push" | "email" | undefined>;
        } | null | undefined;
        isCurrentlyTrackingMotion?: boolean | undefined;
        showTacticsFromSupportGroups?: boolean | undefined;
        androidPermissions?: {
            [x: string]: NonNullable<boolean | undefined>;
        } | null | undefined;
        stepTrackingEnabled?: boolean | undefined;
        displayName?: string | undefined;
        firstName?: string | undefined;
        lastName?: string | undefined;
        nickName?: string | undefined;
        region?: string | null | undefined;
        phoneNumber?: string | undefined;
        isReadyForTour?: boolean | undefined;
        isTourCompleted?: boolean | undefined;
        isButtonSetupSkipped?: boolean | undefined;
        createdAt: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        updatedAt: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        uid: string;
        email: string;
        invitationCode: string;
    }, "createdAt" | "updatedAt" | "uid" | "email" | "invitationCode" | ("avatar" | "parentIssueIds" | "timezone" | "buttonId" | "isAdmin" | "isSuperAdmin" | "activeImpulseId" | "currentAppState" | "showStorybook" | "lastActiveAt" | "expoPushToken" | "releaseChannel" | "notificationPreferences" | "isCurrentlyTrackingMotion" | "showTacticsFromSupportGroups" | "androidPermissions" | "stepTrackingEnabled" | "displayName" | "firstName" | "lastName" | "nickName" | "region" | "phoneNumber" | "isReadyForTour" | "isTourCompleted" | "isButtonSetupSkipped")>;
    gameplanFactory: import("factory.ts").Factory<import("..").GameplanValue, "createdAt" | "updatedAt" | "uid" | "name" | "parentIssueIds" | "tacticsById" | "recap" | "isFeatured" | "recommendationsCount" | "timezone" | "impulse" | "impulseDebrief" | "time" | "location" | "patternsById" | "scheduledNotificationIds" | "dontGenerateRecapTacticsForTacticIds">;
    issueFactory: import("factory.ts").Factory<import("..").IssueValue, keyof import("..").IssueValue>;
    adminProfileFactory: import("factory.ts").Factory<{
        avatar?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | undefined;
        parentIssueIds?: (string | undefined)[] | undefined;
        timezone?: string | undefined;
        buttonId?: string | undefined;
        isAdmin?: boolean | undefined;
        isSuperAdmin?: boolean | undefined;
        activeImpulseId?: string | undefined;
        currentAppState?: import("react-native/types").AppStateStatus | undefined;
        showStorybook?: boolean | undefined;
        lastActiveAt?: Date | undefined;
        expoPushToken?: string | undefined;
        releaseChannel?: "default" | "canary" | undefined;
        notificationPreferences?: {
            [x: string]: NonNullable<"push" | "email" | undefined>;
        } | null | undefined;
        isCurrentlyTrackingMotion?: boolean | undefined;
        showTacticsFromSupportGroups?: boolean | undefined;
        androidPermissions?: {
            [x: string]: NonNullable<boolean | undefined>;
        } | null | undefined;
        stepTrackingEnabled?: boolean | undefined;
        displayName?: string | undefined;
        firstName?: string | undefined;
        lastName?: string | undefined;
        nickName?: string | undefined;
        region?: string | null | undefined;
        phoneNumber?: string | undefined;
        isReadyForTour?: boolean | undefined;
        isTourCompleted?: boolean | undefined;
        isButtonSetupSkipped?: boolean | undefined;
        createdAt: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        updatedAt: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        uid: string;
        email: string;
        invitationCode: string;
    }, "createdAt" | "updatedAt" | "uid" | "email" | "invitationCode" | ("avatar" | "parentIssueIds" | "timezone" | "buttonId" | "isAdmin" | "isSuperAdmin" | "activeImpulseId" | "currentAppState" | "showStorybook" | "lastActiveAt" | "expoPushToken" | "releaseChannel" | "notificationPreferences" | "isCurrentlyTrackingMotion" | "showTacticsFromSupportGroups" | "androidPermissions" | "stepTrackingEnabled" | "displayName" | "firstName" | "lastName" | "nickName" | "region" | "phoneNumber" | "isReadyForTour" | "isTourCompleted" | "isButtonSetupSkipped")>;
    supportGroupFactory: import("factory.ts").Factory<{
        createdAt?: TimestampLike | import("yup").Maybe<null>;
        updatedAt?: TimestampLike | import("yup").Maybe<null>;
        isTemplate?: boolean | undefined;
        invitationCode?: string | undefined;
        slug?: string | undefined;
        templateId?: string | undefined;
        everythingPermissions?: boolean | undefined;
        memberTargetCount?: number | undefined;
        groupNameAliases?: {
            [x: string]: string;
            [x: number]: string;
            [x: symbol]: string;
        } | undefined;
        groupDescription?: string | undefined;
        lastMessagePreview?: string | undefined;
        invitationUrl?: string | undefined;
        lastMessageUid?: string | undefined;
        isSharingDisabled?: boolean | undefined;
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
    }, "thumbnailUrl" | "suggestedTacticIds" | "participantUids" | "groupName" | "creatorName" | "creatorUid" | "icon" | "unreadCounts" | "permissions" | ("createdAt" | "updatedAt" | "isTemplate" | "invitationCode" | "slug" | "templateId" | "everythingPermissions" | "memberTargetCount" | "groupNameAliases" | "groupDescription" | "lastMessagePreview" | "invitationUrl" | "lastMessageUid" | "isSharingDisabled")>;
    messageFactory: import("factory.ts").Factory<import("..").MessageValue, keyof import("..").MessageValue>;
    patternFactory: import("factory.ts").Factory<{
        createdAt?: TimestampLike | import("yup").Maybe<null>;
        updatedAt?: TimestampLike | import("yup").Maybe<null>;
        supportGroupIds?: string[] | undefined;
        notification?: import("yup").Maybe<{} | undefined> | {
            title: string;
            body: string;
        };
        setbackTacticId?: import("yup").Maybe<string | undefined>;
        setbackThreshold?: import("yup").Maybe<number | undefined>;
        issueId?: import("yup").Maybe<string | undefined>;
        parentIssueIds?: string[] | undefined;
        sendWeeklyReports?: import("yup").Maybe<boolean | undefined>;
        uid: string;
        name: string;
        ordinal: number;
    }, "uid" | "name" | "ordinal" | ("createdAt" | "updatedAt" | "supportGroupIds" | "notification" | "setbackTacticId" | "setbackThreshold" | "issueId" | "parentIssueIds" | "sendWeeklyReports")>;
    programFactory: import("factory.ts").Factory<import("..").ProgramValue, "createdAt" | "updatedAt" | "uid" | "tacticsById" | "recap" | "impulse" | "impulseDebrief" | "time" | "location" | "forIssueIds" | "issueNames" | "issueNamesSummary" | "recommendationSummary">;
    tacticFactory: import("factory.ts").Factory<import("..").NonRecursiveTactic, "createdAt" | "updatedAt" | "uid" | "ordinal" | "title" | "type" | "sourceId" | "subtitle" | "description" | "image" | "backgroundColor" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested">;
    measureTimeTacticFactory: import("factory.ts").Factory<{
        createdAt?: TimestampLike | import("yup").Maybe<null>;
        updatedAt?: TimestampLike | import("yup").Maybe<null>;
        uid?: string | null | undefined;
        ordinal?: number | null | undefined;
        sourceId?: string | undefined;
        subtitle?: import("yup").Maybe<string | undefined>;
        description?: string | null | undefined;
        image?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | null | undefined;
        isTemplate?: boolean | null | undefined;
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
        type: "measure-time";
        backgroundColor: string;
    }, "title" | "type" | "backgroundColor" | ("createdAt" | "updatedAt" | "uid" | "ordinal" | "sourceId" | "subtitle" | "description" | "image" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested")>;
    folderTacticFactory: import("factory.ts").Factory<import("..").FolderTacticValue, "title" | "type" | "backgroundColor" | "tacticIds" | "currentTacticIndex" | "tacticsById" | ("createdAt" | "updatedAt" | "uid" | "ordinal" | "sourceId" | "subtitle" | "description" | "image" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested" | "suggestedTacticIds" | "autogenerate")>;
};
