import { AppStateStatus } from 'react-native';
import * as yup from 'yup';
export declare const profileSchema: yup.ObjectSchema<{
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    lastActiveAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    widgetInstalledAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    widgetLastPressedAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    activeImpulseDoc: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
    activeThreadDoc: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
    currentAppState: AppStateStatus | undefined;
    addToFolder: boolean | undefined;
    emojiID: string[] | undefined;
    expoPushToken: string | undefined;
    notificationPreferences: {
        [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
    } | null | undefined;
    questionOfTheDayAnsweredQuestions: {
        [x: string]: boolean | undefined;
    } | null | undefined;
    dayReviewTime: {
        hour: number;
        minute: number;
    } | null;
    issuesById: {
        [x: string]: {
            path?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            ordinal?: number | undefined;
            parentIds?: string[] | undefined;
            parentId?: string | null | undefined;
            parentName?: string | null | undefined;
            hasDebriefQuestion?: boolean | undefined;
            synonyms?: string[] | undefined;
            parentNames?: string[] | undefined;
            profileCount?: number | null | undefined;
            isFeatured?: boolean | null | undefined;
            recommendedFolders?: import("./utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
            folderOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            gameplanTactics?: import("./utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
            name: string;
        };
    } | null | undefined;
    signUpIssueId: string | null;
    signUpIssueName: string | null | undefined;
    isReadyForTour: boolean | undefined;
    isOnboardingComplete: boolean | undefined;
    parentIds: string[] | undefined;
    setbackThreshold: number | undefined;
    sendDebriefRemindersAfterMinutes: number | undefined;
    gameplanStrategies: import("./utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
    androidPermissions: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    impulseContext: string | null | undefined;
    region: string | null | undefined;
    timezone: string;
    scheduledNotificationIds: string[] | undefined;
    whatsappFolderDoc: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
    uids: string[];
    onboardedWithZaraAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    lastActiveAt: undefined;
    widgetInstalledAt: undefined;
    widgetLastPressedAt: undefined;
    activeImpulseDoc: undefined;
    activeThreadDoc: undefined;
    currentAppState: undefined;
    addToFolder: undefined;
    emojiID: "";
    expoPushToken: undefined;
    notificationPreferences: undefined;
    questionOfTheDayAnsweredQuestions: undefined;
    dayReviewTime: null;
    issuesById: undefined;
    signUpIssueId: undefined;
    signUpIssueName: undefined;
    isReadyForTour: undefined;
    isOnboardingComplete: undefined;
    parentIds: "";
    setbackThreshold: undefined;
    sendDebriefRemindersAfterMinutes: undefined;
    gameplanStrategies: "";
    androidPermissions: undefined;
    impulseContext: undefined;
    region: undefined;
    timezone: undefined;
    scheduledNotificationIds: "";
    whatsappFolderDoc: undefined;
    uids: "";
    onboardedWithZaraAt: undefined;
}, "">;
export type ProfileValue = yup.InferType<typeof profileSchema>;
