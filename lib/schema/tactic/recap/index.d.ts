import * as yup from 'yup';
import { RecapActionTacticValue } from './recapAction';
import { RecapTrackingTacticValue } from './recapTracking';
export * from './recapAction';
export * from './recapTracking';
export declare const recapTacticSchemas: Record<RecapTacticValue['type'], yup.ObjectSchema<RecapTacticValue>>;
export declare const recapTacticSchema: yup.Lazy<{
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    uid?: string | undefined;
    setbackThreshold?: number | null | undefined;
    recommendedForIssueIds?: string[] | undefined;
    prompt?: string | undefined;
    sourceFile?: import("../../utils/firestore").DocumentReferenceLike<unknown> | undefined;
    sharedWithIssueIds?: string[] | undefined;
    recommendedForIssueOrdinals?: {
        [x: string]: number;
    } | null | undefined;
    isShared?: boolean | undefined;
    description?: string | null | undefined;
    pastTenseTitle?: string | undefined;
    debriefAfterMinutes?: number | null | undefined;
    image?: {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        waveForm?: yup.Maybe<string | undefined>;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        contentType: string;
        storagePath: string;
        uri: string;
    } | undefined;
    backgroundColor?: string | undefined;
    likesCount?: number | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
    isSuggested?: boolean | undefined;
    type: import("./recapKeyType").RecapKeyType;
    ordinal: number;
}, yup.AnyObject, any>;
export type RecapTacticValue = RecapActionTacticValue | RecapTrackingTacticValue;
