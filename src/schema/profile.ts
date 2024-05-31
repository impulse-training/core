import { AppStateStatus } from 'react-native';
import * as yup from 'yup';
import { notificationOptionSchema } from './notification';
import { supportGroupSchema } from './supportGroup';
import { optionalStringArray, requiredStringArray } from './utils/array';
import { objectOf, optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const profileSchema = yup.object().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  activeImpulseId: yup.string().optional(),
  currentAppState: yup.mixed<AppStateStatus>().optional(), // Define validation for AppStateStatus if needed
  lastActiveAt: optionalTimestampSchema,
  expoPushToken: yup.string().optional(),
  widgetInstalledAt: optionalTimestampSchema,
  notificationPreferences: optionalObjectOf(
    yup.array().of(notificationOptionSchema)
  ),
  issueName: yup.string(),
  setbackThreshold: yup.number(),
  isTourCompleted: yup.boolean(),
  androidPermissions: optionalObjectOf(yup.boolean().required()),
  parentIssueIds: optionalStringArray,
  region: yup.string().nullable().optional(),
  timezone: yup.string().required(),
  favouriteSupportGroups: objectOf(supportGroupSchema),
  scheduledNotificationIds: optionalStringArray,
  uids: requiredStringArray,
});

export type ProfileValue = yup.InferType<typeof profileSchema>;
