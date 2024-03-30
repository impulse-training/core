import * as yup from 'yup';
export declare const recoveryCode: yup.ObjectSchema<{
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    usedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    profileId: string;
    hashedCode: string;
    last4: string;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    usedAt: undefined;
    profileId: undefined;
    hashedCode: undefined;
    last4: undefined;
}, "">;
export type RecoveryCodeValue = yup.InferType<typeof recoveryCode>;
