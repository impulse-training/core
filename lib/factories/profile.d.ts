import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeProfileFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
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
    avatar?: {
        localFilePath?: import("yup").Maybe<string | undefined>;
        storagePath?: import("yup").Maybe<string | undefined>;
        uri?: import("yup").Maybe<string | undefined>;
    } | undefined;
    parentIssueIds?: (string | undefined)[] | undefined;
    email?: import("yup").Maybe<string | undefined>;
    buttonId?: string | undefined;
    isAdmin?: boolean | undefined;
    isSuperAdmin?: boolean | undefined;
    activeImpulseId?: string | undefined;
    currentAppState?: import("react-native/types").AppStateStatus | undefined;
    showStorybook?: boolean | undefined;
    lastActiveAt?: Date | undefined;
    expoPushToken?: string | undefined;
    releaseChannel?: "default" | "canary" | undefined;
    widgetInstalledAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    notificationPreferences?: {
        [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
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
    isTourCompleted?: boolean | undefined;
    isButtonSetupSkipped?: boolean | undefined;
    timezone: string;
    invitationCode: string;
}, "timezone" | "invitationCode" | ("createdAt" | "updatedAt" | "avatar" | "parentIssueIds" | "email" | "buttonId" | "isAdmin" | "isSuperAdmin" | "activeImpulseId" | "currentAppState" | "showStorybook" | "lastActiveAt" | "expoPushToken" | "releaseChannel" | "widgetInstalledAt" | "notificationPreferences" | "isCurrentlyTrackingMotion" | "showTacticsFromSupportGroups" | "androidPermissions" | "stepTrackingEnabled" | "displayName" | "firstName" | "lastName" | "nickName" | "region" | "phoneNumber" | "isTourCompleted" | "isButtonSetupSkipped")>;
export declare const makeAdminProfileFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
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
    avatar?: {
        localFilePath?: import("yup").Maybe<string | undefined>;
        storagePath?: import("yup").Maybe<string | undefined>;
        uri?: import("yup").Maybe<string | undefined>;
    } | undefined;
    parentIssueIds?: (string | undefined)[] | undefined;
    email?: import("yup").Maybe<string | undefined>;
    buttonId?: string | undefined;
    isAdmin?: boolean | undefined;
    isSuperAdmin?: boolean | undefined;
    activeImpulseId?: string | undefined;
    currentAppState?: import("react-native/types").AppStateStatus | undefined;
    showStorybook?: boolean | undefined;
    lastActiveAt?: Date | undefined;
    expoPushToken?: string | undefined;
    releaseChannel?: "default" | "canary" | undefined;
    widgetInstalledAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    notificationPreferences?: {
        [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
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
    isTourCompleted?: boolean | undefined;
    isButtonSetupSkipped?: boolean | undefined;
    timezone: string;
    invitationCode: string;
}, "timezone" | "invitationCode" | ("createdAt" | "updatedAt" | "avatar" | "parentIssueIds" | "email" | "buttonId" | "isAdmin" | "isSuperAdmin" | "activeImpulseId" | "currentAppState" | "showStorybook" | "lastActiveAt" | "expoPushToken" | "releaseChannel" | "widgetInstalledAt" | "notificationPreferences" | "isCurrentlyTrackingMotion" | "showTacticsFromSupportGroups" | "androidPermissions" | "stepTrackingEnabled" | "displayName" | "firstName" | "lastName" | "nickName" | "region" | "phoneNumber" | "isTourCompleted" | "isButtonSetupSkipped")>;
