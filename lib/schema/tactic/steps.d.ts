import * as yup from 'yup';
export declare const stepsTacticSchema: yup.ObjectSchema<{
    type: "steps";
    profileId: string | null | undefined;
    sourceId: string | undefined;
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
    title: string;
    subtitle: yup.Maybe<string | undefined>;
    description: string | null | undefined;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    setbackThreshold: number | null | undefined;
    optionsById: {
        [x: string]: {
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
            label?: string | undefined;
            setbackThreshold?: number | undefined;
            color?: string | undefined;
            strategiesPath?: string | undefined;
            greaterThan?: number | undefined;
            lessThanOrEqualTo?: number | undefined;
            text: string;
            ordinal: number;
            type: "question-time";
        } | {
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
            label?: string | undefined;
            setbackThreshold?: number | undefined;
            color?: string | undefined;
            strategiesPath?: string | undefined;
            greaterThan?: number | undefined;
            lessThanOrEqualTo?: number | undefined;
            text: string;
            ordinal: number;
            type: "question-counter";
        } | {
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
            label?: string | undefined;
            color?: string | undefined;
            strategiesPath?: string | undefined;
            text: string;
            ordinal: number;
            type: "question-multiple-choice";
            value: string;
        };
    } | null | undefined;
    backgroundColor: string;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    isAvailableForRecommendation: boolean | null | undefined;
    numberOfLikes: number | null | undefined;
    isSuggested: boolean | undefined;
    steps: number;
}, yup.AnyObject, {
    type: undefined;
    profileId: undefined;
    sourceId: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    title: undefined;
    subtitle: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
    setbackThreshold: undefined;
    optionsById: undefined;
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    timerSeconds: undefined;
    isAvailableForRecommendation: undefined;
    numberOfLikes: undefined;
    isSuggested: undefined;
    steps: undefined;
}, "">;
export type StepsTacticValue = yup.InferType<typeof stepsTacticSchema>;
