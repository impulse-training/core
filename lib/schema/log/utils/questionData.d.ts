import * as yup from 'yup';
export declare const questionDataSchema: yup.ObjectSchema<{
    setbackThreshold: number | undefined;
    idValue: string | undefined;
    numericValue: number | undefined;
    stringValue: string;
    label: string | undefined;
    color: string | undefined;
    unit: string;
    setAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
}, yup.AnyObject, {
    setbackThreshold: undefined;
    idValue: undefined;
    numericValue: undefined;
    stringValue: undefined;
    label: undefined;
    color: undefined;
    unit: undefined;
    setAt: {
        seconds: undefined;
        nanoseconds: undefined;
        isEqual: undefined;
        toMillis: undefined;
        toJSON: undefined;
        toDate: undefined;
    };
}, "">;
export type QuestionDataValue = yup.InferType<typeof questionDataSchema>;
