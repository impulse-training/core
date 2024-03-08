import * as yup from 'yup';
import { TimestampLike } from '../../utils/TimestampLike';
import { TacticValue, WithTacticsById } from '../tactic';
export * from './routines';
export * from './strategy';
export type GameplanValue = WithTypes<typeof gameplanSchema>;
export declare const gameplanSchema: yup.ObjectSchema<{
    uid: string;
    name: yup.Maybe<string | undefined>;
    isFeatured: yup.Maybe<boolean | undefined>;
    createdAt: TimestampLike | yup.Maybe<null>;
    updatedAt: TimestampLike | yup.Maybe<null>;
    parentIssueIds: string[] | undefined;
    impulse: {
        [x: string]: {
            suggestedTacticIds?: string[] | undefined;
            conditionalTacticIds?: {
                ids: string[];
                condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                value: {};
            }[] | undefined;
            tacticIds: string[];
        };
    };
    impulseDebrief: {
        [x: string]: {
            suggestedTacticIds?: string[] | undefined;
            conditionalTacticIds?: {
                ids: string[];
                condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                value: {};
            }[] | undefined;
            tacticIds: string[];
        };
    };
    time: {
        [x: string]: {
            suggestedTacticIds?: string[] | undefined;
            conditionalTacticIds?: {
                ids: string[];
                condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                value: {};
            }[] | undefined;
            title: string;
            tacticIds: string[];
            weekdays: number[];
            hour: number;
            minute: number;
        };
    } | null | undefined;
    location: {
        [x: string]: {
            suggestedTacticIds?: string[] | undefined;
            conditionalTacticIds?: {
                ids: string[];
                condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                value: {};
            }[] | undefined;
            title: string;
            tacticIds: string[];
            locationId: string;
            mode: NonNullable<"enter" | "exit" | undefined>;
        };
    } | null | undefined;
    tacticsById: any;
    scheduledNotificationIds: string[] | undefined;
    dontGenerateRecapTacticsForTacticIds: string[] | undefined;
}, yup.AnyObject, {
    uid: undefined;
    name: undefined;
    isFeatured: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    parentIssueIds: "";
    impulse: undefined;
    impulseDebrief: undefined;
    time: undefined;
    location: undefined;
    tacticsById: any;
    scheduledNotificationIds: "";
    dontGenerateRecapTacticsForTacticIds: "";
}, "">;
type WithTypes<T extends yup.ISchema<unknown>> = WithTacticsById<yup.InferType<T>> & {
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    tacticsById: Record<string, TacticValue>;
};
export declare const SHORT_DAYS: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
};
export declare const LONG_DAYS: string[];
