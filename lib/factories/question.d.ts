import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeQuestionTimeTacticFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
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
    setbackThreshold?: number | undefined;
    followUp?: ({
        type: "profileData";
        profileKey: string;
        profileValue: {};
    } | {
        type: "question";
        questionId: string;
    }) | undefined;
    options?: ({
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
        followUp?: ({
            type: "profileData";
            profileKey: string;
            profileValue: {};
        } | {
            type: "question";
            questionId: string;
        }) | undefined;
        color?: string | undefined;
        textColor?: string | undefined;
        greaterThan?: number | undefined;
        lessThanOrEqualTo?: number | undefined;
        text: string;
        type: "numeric";
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
        followUp?: ({
            type: "profileData";
            profileKey: string;
            profileValue: {};
        } | {
            type: "question";
            questionId: string;
        }) | undefined;
        color?: string | undefined;
        textColor?: string | undefined;
        text: string;
        type: "string";
    })[] | undefined;
    templateFor?: "onboarding" | undefined;
    writeAnswerToProfileMemoryKey?: string | undefined;
    type: import("..").QuestionKeyType;
    prompt: string;
    ordinal: number;
}, "type" | "prompt" | "ordinal" | ("createdAt" | "updatedAt" | "setbackThreshold" | "followUp" | "options" | "templateFor" | "writeAnswerToProfileMemoryKey")>;
