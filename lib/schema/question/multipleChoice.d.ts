import * as yup from 'yup';
export declare const questionMultipleChoiceSchema: yup.ObjectSchema<{
    categories: ("general" | "impulses" | "debriefing" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
    prompt: string;
    type: import("..").QuestionKeyType;
    options: ({
        label?: string | undefined;
        setbackThreshold?: number | undefined;
        color?: string | undefined;
        followUps?: ({
            message?: string | undefined;
            type: "askAnotherQuestion";
            questionId: string;
        } | {
            message?: string | undefined;
            type: "writeAnswerToProfile";
            profileKey: string;
        } | {
            message?: string | undefined;
            type: "writeValueToProfile";
            profileKey: string;
            value: {};
        })[] | undefined;
        textColor?: string | undefined;
        greaterThan?: number | undefined;
        lessThanOrEqualTo?: number | undefined;
        text: string;
        type: "numeric";
    } | {
        label?: string | undefined;
        color?: string | undefined;
        followUps?: ({
            message?: string | undefined;
            type: "askAnotherQuestion";
            questionId: string;
        } | {
            message?: string | undefined;
            type: "writeAnswerToProfile";
            profileKey: string;
        } | {
            message?: string | undefined;
            type: "writeValueToProfile";
            profileKey: string;
            value: {};
        })[] | undefined;
        textColor?: string | undefined;
        text: string;
        type: "string";
    })[];
    ordinal: number;
    templateFor: "onboarding" | undefined;
    writeAnswerToProfileMemoryKey: string | undefined;
    followUps: ({
        message?: string | undefined;
        type: "askAnotherQuestion";
        questionId: string;
    } | {
        message?: string | undefined;
        type: "writeAnswerToProfile";
        profileKey: string;
    } | {
        message?: string | undefined;
        type: "writeValueToProfile";
        profileKey: string;
        value: {};
    })[] | undefined;
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
    canAddNewOptions: NonNullable<boolean | undefined>;
}, yup.AnyObject, {
    categories: "";
    prompt: undefined;
    type: undefined;
    options: "";
    ordinal: undefined;
    templateFor: undefined;
    writeAnswerToProfileMemoryKey: undefined;
    followUps: "";
    createdAt: undefined;
    updatedAt: undefined;
    canAddNewOptions: false;
}, "">;
export type QuestionMultipleChoiceValue = yup.InferType<typeof questionMultipleChoiceSchema>;
