export declare const factories: {
    dayLogsSummaryFactory: import("factory.ts").Factory<{
        [x: string]: {
            type: NonNullable<"time" | "impulse" | undefined>;
            optionsById: {
                [x: string]: {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    label?: string | undefined;
                    text: string;
                    type: "question-multiple-choice";
                    color: string;
                    textColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    label?: string | undefined;
                    setbackThreshold?: number | undefined;
                    greaterThan?: number | undefined;
                    lessThanOrEqualTo?: number | undefined;
                    text: string;
                    type: "question-time";
                    color: string;
                    textColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    label?: string | undefined;
                    setbackThreshold?: number | undefined;
                    greaterThan?: number | undefined;
                    lessThanOrEqualTo?: number | undefined;
                    text: string;
                    type: "question-counter";
                    color: string;
                    textColor: string;
                };
            };
            hour: number;
            minute: number;
            tacticDataById: {
                [x: string]: {
                    value?: number | undefined;
                    customUnit?: string | undefined;
                    optionId?: string | null | undefined;
                    optionLabel?: string | undefined;
                    optionColor?: string | undefined;
                    optionTextColor?: string | undefined;
                    isCompleted?: boolean | undefined;
                    nextStrategiesPath?: string | undefined;
                    lowEmoji?: import("yup").Maybe<string | undefined>;
                    highEmoji?: import("yup").Maybe<string | undefined>;
                    unit: NonNullable<"time" | "custom" | undefined>;
                    formattedValue: string;
                };
            };
        };
    }, string | number>;
    profileLogsSummaryFactory: import("factory.ts").Factory<{
        [x: string]: {
            [x: string]: {
                value?: number | undefined;
                customUnit?: string | undefined;
                optionId?: string | null | undefined;
                optionLabel?: string | undefined;
                optionColor?: string | undefined;
                optionTextColor?: string | undefined;
                isCompleted?: boolean | undefined;
                nextStrategiesPath?: string | undefined;
                lowEmoji?: import("yup").Maybe<string | undefined>;
                highEmoji?: import("yup").Maybe<string | undefined>;
                unit: NonNullable<"time" | "custom" | undefined>;
                formattedValue: string;
            };
        };
    }, string | number>;
    applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>;
    commentFactory: import("factory.ts").Factory<{
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        tacticId?: string | null | undefined;
        tacticTitle?: string | null | undefined;
        text?: string | undefined;
        recording?: {
            localFilePath?: string | undefined;
            waveform?: string | null | undefined;
            remoteFilePath: string;
        } | undefined;
        isEdited?: boolean | undefined;
        avatar?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | undefined;
        profileId: string;
    }, "profileId" | ("createdAt" | "updatedAt" | "tacticId" | "tacticTitle" | "text" | "recording" | "isEdited" | "avatar")>;
    impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "tacticsById" | "startTime" | "timezone" | "location" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticIds" | "tacticLikes" | "tacticData" | "supportGroups" | "setAsActiveImpulse" | "isDisplayable" | "debriefTactic" | "debriefAfter" | "debriefReminderSentAt" | "debriefedAt">;
    timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "tacticsById" | "startTime" | "timezone" | "location" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticIds" | "tacticLikes" | "tacticData" | "supportGroups" | "isDisplayable">;
    locationLogFactory: import("factory.ts").Factory<import("..").LocationLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "tacticsById" | "startTime" | "timezone" | "location" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticIds" | "tacticLikes" | "tacticData" | "supportGroups" | "isDisplayable" | "locationId" | "locationName" | "locationMode">;
    locationFactory: import("factory.ts").Factory<{
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        latitude?: number | undefined;
        longitude?: number | undefined;
        profileId: string;
        name: string;
        address: string;
    }, "profileId" | "name" | "address" | ("createdAt" | "updatedAt" | "latitude" | "longitude")>;
    profileFactory: import("factory.ts").Factory<{
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        setbackThreshold?: number | undefined;
        debriefAfterMinutes?: number | undefined;
        debriefTactic?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
        activeImpulseId?: string | undefined;
        currentAppState?: import("react-native/types").AppStateStatus | undefined;
        lastActiveAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        expoPushToken?: string | undefined;
        widgetInstalledAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        notificationPreferences?: {
            [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
        } | null | undefined;
        issueName?: string | undefined;
        isTourCompleted?: boolean | undefined;
        androidPermissions?: {
            [x: string]: NonNullable<boolean | undefined>;
        } | null | undefined;
        parentIssueIds?: string[] | undefined;
        region?: string | null | undefined;
        scheduledNotificationIds?: string[] | undefined;
        timezone: string;
        supportGroups: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[];
        invitationCode: string;
        uids: string[];
    }, "timezone" | "supportGroups" | "invitationCode" | "uids" | ("createdAt" | "updatedAt" | "setbackThreshold" | "debriefAfterMinutes" | "debriefTactic" | "activeImpulseId" | "currentAppState" | "lastActiveAt" | "expoPushToken" | "widgetInstalledAt" | "notificationPreferences" | "issueName" | "isTourCompleted" | "androidPermissions" | "parentIssueIds" | "region" | "scheduledNotificationIds")>;
    issueFactory: import("factory.ts").Factory<{
        path?: string | null | undefined;
        setbackThreshold?: number | undefined;
        parentId?: string | null | undefined;
        strategiesCount?: number | null | undefined;
        profileCount?: number | null | undefined;
        isFeatured?: boolean | null | undefined;
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
        debriefTactic: {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            profileId?: string | null | undefined;
            setbackThreshold?: number | null | undefined;
            subtitle?: import("yup").Maybe<string | undefined>;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            optionsById?: {
                [x: string]: {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    label?: string | undefined;
                    text: string;
                    type: "question-multiple-choice";
                    color: string;
                    textColor: string;
                    strategiesPath: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    label?: string | undefined;
                    setbackThreshold?: number | undefined;
                    greaterThan?: number | undefined;
                    lessThanOrEqualTo?: number | undefined;
                    text: string;
                    type: "question-time";
                    color: string;
                    textColor: string;
                    strategiesPath: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    label?: string | undefined;
                    setbackThreshold?: number | undefined;
                    greaterThan?: number | undefined;
                    lessThanOrEqualTo?: number | undefined;
                    text: string;
                    type: "question-counter";
                    color: string;
                    textColor: string;
                    strategiesPath: string;
                };
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            linkUrl?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            type: import("..").QuestionKeyType;
            title: string;
            backgroundColor: string;
        } | {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            profileId?: string | null | undefined;
            setbackThreshold?: number | null | undefined;
            lowEmoji?: import("yup").Maybe<string | undefined>;
            highEmoji?: import("yup").Maybe<string | undefined>;
            subtitle?: import("yup").Maybe<string | undefined>;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            optionsById?: {
                [x: string]: {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    label?: string | undefined;
                    text: string;
                    type: "question-multiple-choice";
                    color: string;
                    textColor: string;
                    strategiesPath: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    label?: string | undefined;
                    setbackThreshold?: number | undefined;
                    greaterThan?: number | undefined;
                    lessThanOrEqualTo?: number | undefined;
                    text: string;
                    type: "question-time";
                    color: string;
                    textColor: string;
                    strategiesPath: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    label?: string | undefined;
                    setbackThreshold?: number | undefined;
                    greaterThan?: number | undefined;
                    lessThanOrEqualTo?: number | undefined;
                    text: string;
                    type: "question-counter";
                    color: string;
                    textColor: string;
                    strategiesPath: string;
                };
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            linkUrl?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            type: import("..").QuestionKeyType;
            title: string;
            backgroundColor: string;
        };
        name: string;
        synonyms: string[];
        parentIds: string[];
        parentNames: string[];
        therapistProfileIds: string[];
    }, "createdAt" | "updatedAt" | "debriefTactic" | "name" | "synonyms" | "parentIds" | "parentNames" | "therapistProfileIds" | ("path" | "setbackThreshold" | "parentId" | "strategiesCount" | "profileCount" | "isFeatured")>;
    supportGroupFactory: import("factory.ts").Factory<{
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
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
        creatorProfileId?: string | undefined;
        lastMessagePreview?: string | undefined;
        lastMessageProfileId?: string | undefined;
        isSharingDisabled?: boolean | undefined;
        tacticPreviewsById?: {
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | undefined;
            backgroundColor?: string | undefined;
            title: string;
        }[] | undefined;
        unreadCounts?: {
            [x: string]: number;
        } | null | undefined;
        permissions?: {} | undefined;
        invitationCode: string;
        participantProfileIds: string[];
        groupName: string;
        invitationUrl: string;
    }, "invitationCode" | "participantProfileIds" | "groupName" | "invitationUrl" | ("createdAt" | "updatedAt" | "slug" | "templateId" | "everythingPermissions" | "memberTargetCount" | "groupNameAliases" | "groupDescription" | "creatorProfileId" | "lastMessagePreview" | "lastMessageProfileId" | "isSharingDisabled" | "tacticPreviewsById" | "unreadCounts" | "permissions")>;
    messageFactory: import("factory.ts").Factory<import("..").MessageValue, keyof import("..").MessageValue>;
    tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "createdAt" | "updatedAt" | "profileId" | "type" | "setbackThreshold" | "title" | "subtitle" | "description" | "debriefAfterMinutes" | "image" | "optionsById" | "backgroundColor" | "isTemplate" | "language" | "linkUrl" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested">;
    questionTimeTacticFactory: import("factory.ts").Factory<{
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        profileId?: string | null | undefined;
        setbackThreshold?: number | null | undefined;
        subtitle?: import("yup").Maybe<string | undefined>;
        description?: string | null | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | null | undefined;
        optionsById?: {
            [x: string]: {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                label?: string | undefined;
                text: string;
                type: "question-multiple-choice";
                color: string;
                textColor: string;
                strategiesPath: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                label?: string | undefined;
                setbackThreshold?: number | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                text: string;
                type: "question-time";
                color: string;
                textColor: string;
                strategiesPath: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                label?: string | undefined;
                setbackThreshold?: number | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                text: string;
                type: "question-counter";
                color: string;
                textColor: string;
                strategiesPath: string;
            };
        } | null | undefined;
        isTemplate?: boolean | null | undefined;
        language?: string | null | undefined;
        linkUrl?: string | null | undefined;
        categoryIds?: (string | undefined)[] | null | undefined;
        isShared?: boolean | null | undefined;
        isResponseRequired?: boolean | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
        isAvailableForRecommendation?: boolean | null | undefined;
        numberOfLikes?: number | null | undefined;
        isSuggested?: boolean | undefined;
        type: import("..").QuestionKeyType;
        title: string;
        backgroundColor: string;
    }, "type" | "title" | "backgroundColor" | ("createdAt" | "updatedAt" | "profileId" | "setbackThreshold" | "subtitle" | "description" | "debriefAfterMinutes" | "image" | "optionsById" | "isTemplate" | "language" | "linkUrl" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested")>;
    strategyFactory: import("factory.ts").Factory<import("..").StrategyValue, "createdAt" | "updatedAt" | "profileId" | "type" | "tacticsById" | "tacticIds" | "name" | "recommendedForIssueIds" | "ordinal" | "recommendedFor" | "recommendedForIssueOrdinals" | "subscribeToAllTactics" | "supportGroup">;
    timeRoutineFactory: import("factory.ts").Factory<{
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        profileId: string;
        type: "time";
        supportGroups: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[];
        hour: number;
        minute: number;
        name: string;
        weekdays: number[];
    }, "profileId" | "type" | "supportGroups" | "hour" | "minute" | "name" | "weekdays" | ("createdAt" | "updatedAt")>;
};
