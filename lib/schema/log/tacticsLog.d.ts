import * as yup from 'yup';
export declare const tacticsLogSchema: yup.ObjectSchema<{
    openAiChoiceResponse: {} | undefined;
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
    type: "tactics";
    date: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    senderProfileId: string | null | undefined;
    gptPayload: {
        role: NonNullable<"system" | "user" | "assistant" | undefined>;
        content: string;
    };
    tacticsById: {
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
            profileId?: string | null | undefined;
            setbackThreshold?: number | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            commentCount?: number | undefined;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            recording: {
                localFilePath?: string | undefined;
                waveform?: string | null | undefined;
                remoteFilePath: string;
            };
            type: "audio";
            ordinal: number;
            title: string;
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
            profileId?: string | null | undefined;
            setbackThreshold?: number | null | undefined;
            repeat?: yup.Maybe<number | undefined>;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            commentCount?: number | undefined;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            type: "breathe";
            ordinal: number;
            title: string;
            inFor: number;
            holdFor: number;
            outFor: number;
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
            profileId?: string | null | undefined;
            setbackThreshold?: number | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            commentCount?: number | undefined;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            type: "contacts";
            ordinal: number;
            title: string;
            contactIds: string[];
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
            profileId?: string | null | undefined;
            setbackThreshold?: number | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            commentCount?: number | undefined;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            type: "steps";
            ordinal: number;
            title: string;
            steps: number;
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
            profileId?: string | null | undefined;
            setbackThreshold?: number | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            commentCount?: number | undefined;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            type: "task";
            ordinal: number;
            title: string;
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
            profileId?: string | null | undefined;
            setbackThreshold?: number | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            commentCount?: number | undefined;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            type: "video";
            ordinal: number;
            title: string;
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
                title: string;
                description: string;
                thumbnailUrl: string;
                duration: number;
            };
        };
    };
    completedTacticIds: string[];
}, yup.AnyObject, {
    openAiChoiceResponse: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    type: undefined;
    date: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    senderProfileId: undefined;
    gptPayload: {
        role: undefined;
        content: undefined;
    };
    tacticsById: undefined;
    completedTacticIds: "";
}, "">;
export type TacticsLogValue = yup.InferType<typeof tacticsLogSchema>;
