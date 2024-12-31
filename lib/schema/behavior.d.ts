import * as yup from 'yup';
export declare const behaviorSchema: yup.ObjectSchema<{
    name: string;
    ordinal: number;
    trackingType: NonNullable<"time" | "counter" | undefined>;
    dailyLimit: number | undefined;
    isHelpful: boolean | null;
    skipGameplanAutoCreation: boolean | undefined;
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
}, yup.AnyObject, {
    name: undefined;
    ordinal: undefined;
    trackingType: undefined;
    dailyLimit: undefined;
    isHelpful: undefined;
    skipGameplanAutoCreation: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type BehaviorValue = yup.InferType<typeof behaviorSchema>;
