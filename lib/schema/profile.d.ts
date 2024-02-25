import { AppStateStatus, Permission } from 'react-native';
import { TimestampLike } from '../utils/TimestampLike';
import { Image } from '../utils/image';
import { NOTIFICATION_TYPES, NotificationOption } from './notification';
import { TimeRoutineValue } from './routine';
import { TacticValue } from './tactic';
export interface ProfileValue {
    uid: string;
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    buttonId?: string;
    isAdmin?: boolean;
    isSuperAdmin?: boolean;
    activeImpulseId?: string;
    email: string;
    currentAppState?: AppStateStatus;
    showStorybook?: boolean;
    lastActiveAt?: TimestampLike;
    expoPushToken?: string;
    releaseChannel?: 'default' | 'canary';
    notificationPreferences: Partial<Record<keyof typeof NOTIFICATION_TYPES, Array<NotificationOption>>>;
    isCurrentlyTrackingMotion?: boolean;
    showTacticsFromSupportGroups?: boolean;
    androidPermissions?: Record<Permission, boolean>;
    recommendationsCount?: number;
    parentIssueIds?: Array<string>;
    stepTrackingEnabled?: boolean;
    displayName?: string;
    firstName?: string;
    lastName?: string;
    nickName?: string;
    region?: string | null;
    timezone?: string;
    phoneNumber?: string;
    avatar?: Image;
    isReadyForTour?: boolean;
    isTourCompleted?: boolean;
    isButtonSetupSkipped?: boolean;
    invitationCode: string;
    impulseNotifications?: Record<string, {
        title: string;
        body: string;
    }>;
    viewAccessGrantedTo?: Array<string>;
    timeRoutines?: Record<string, {
        gameplan: TimeRoutineValue;
        tactic: TacticValue;
    }>;
}
