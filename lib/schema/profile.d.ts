import { AppStateStatus } from 'react-native';
import * as yup from 'yup';
export declare const profileSchema: yup.ObjectSchema<{
    uid: string;
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
    buttonId: string | undefined;
    isAdmin: boolean | undefined;
    isSuperAdmin: boolean | undefined;
    activeImpulseId: string | undefined;
    email: string;
    currentAppState: AppStateStatus | undefined;
    showStorybook: boolean | undefined;
    lastActiveAt: Date | undefined;
    expoPushToken: string | undefined;
    releaseChannel: "default" | "canary" | undefined;
    notificationPreferences: {
        [x: string]: NonNullable<"push" | "email" | undefined>;
    } | null | undefined;
    isCurrentlyTrackingMotion: boolean | undefined;
    showTacticsFromSupportGroups: boolean | undefined;
    androidPermissions: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    parentIssueIds: (string | undefined)[] | undefined;
    stepTrackingEnabled: boolean | undefined;
    displayName: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    nickName: string | undefined;
    region: string | null | undefined;
    timezone: string | undefined;
    phoneNumber: string | undefined;
    avatar: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | undefined;
    isReadyForTour: boolean | undefined;
    isTourCompleted: boolean | undefined;
    isButtonSetupSkipped: boolean | undefined;
    invitationCode: string;
}, yup.AnyObject, {
    uid: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    buttonId: undefined;
    isAdmin: undefined;
    isSuperAdmin: undefined;
    activeImpulseId: undefined;
    email: undefined;
    currentAppState: undefined;
    showStorybook: undefined;
    lastActiveAt: undefined;
    expoPushToken: undefined;
    releaseChannel: undefined;
    notificationPreferences: undefined;
    isCurrentlyTrackingMotion: undefined;
    showTacticsFromSupportGroups: undefined;
    androidPermissions: undefined;
    parentIssueIds: "";
    stepTrackingEnabled: undefined;
    displayName: undefined;
    firstName: undefined;
    lastName: undefined;
    nickName: undefined;
    region: undefined;
    timezone: undefined;
    phoneNumber: undefined;
    avatar: undefined;
    isReadyForTour: undefined;
    isTourCompleted: undefined;
    isButtonSetupSkipped: undefined;
    invitationCode: undefined;
}, "">;
export type ProfileValue = yup.InferType<typeof profileSchema>;
