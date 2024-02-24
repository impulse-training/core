import * as yup from 'yup';
import { WithTacticsById } from './tactic';
export declare const gameplanBaseSchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[];
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
                title: string;
                description: string;
                thumbnailUrl: string;
                duration: number;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        };
    };
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    tacticsById: undefined;
}, "">;
type Inferred<T extends yup.ISchema<unknown>> = WithTacticsById<yup.InferType<T>>;
export type Gameplan = Inferred<typeof gameplanBaseSchema>;
declare const impulseGameplanSchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[];
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
                title: string;
                description: string;
                thumbnailUrl: string;
                duration: number;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        };
    };
    uid: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string | null | undefined;
    navigationTitle: string | null | undefined;
    isTemplate: boolean | null | undefined;
    timezone: string | null | undefined;
    patternName: string | null | undefined;
    issueId: string | null | undefined;
    parentIssueIds: string[] | null | undefined;
} & {
    type: NonNullable<"impulse" | "impulseDebrief" | undefined>;
    patternId: string;
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    tacticsById: undefined;
    uid: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    title: undefined;
    navigationTitle: undefined;
    isTemplate: undefined;
    timezone: undefined;
    patternName: undefined;
    issueId: undefined;
    parentIssueIds: "";
    type: undefined;
    patternId: undefined;
}, "">;
export type ImpulseGameplanValue = Inferred<typeof impulseGameplanSchema>;
export type SchedulableGameplanValue = Inferred<typeof schedulableGameplanSchema>;
declare const schedulableGameplanSchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[];
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
                title: string;
                description: string;
                thumbnailUrl: string;
                duration: number;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        };
    };
    uid: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string | null | undefined;
    navigationTitle: string | null | undefined;
    isTemplate: boolean | null | undefined;
    timezone: string;
    patternName: string | null | undefined;
    issueId: string | null | undefined;
    parentIssueIds: string[] | null | undefined;
} & {
    weekdays: number[];
    hour: number;
    minute: number;
    timezone: string;
    scheduledNotificationIds: string[] | null | undefined;
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    tacticsById: undefined;
    uid: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    title: undefined;
    navigationTitle: undefined;
    isTemplate: undefined;
    timezone: undefined;
    patternName: undefined;
    issueId: undefined;
    parentIssueIds: "";
    weekdays: "";
    hour: undefined;
    minute: undefined;
    scheduledNotificationIds: "";
}, "">;
export type TimeGameplanValue = Inferred<typeof timeGameplanSchema>;
declare const timeGameplanSchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[];
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
                title: string;
                description: string;
                thumbnailUrl: string;
                duration: number;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        };
    };
    uid: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string | null | undefined;
    navigationTitle: string | null | undefined;
    isTemplate: boolean | null | undefined;
    timezone: string;
    patternName: string | null | undefined;
    issueId: string | null | undefined;
    parentIssueIds: string[] | null | undefined;
    weekdays: number[];
    hour: number;
    minute: number;
    scheduledNotificationIds: string[] | null | undefined;
} & {
    type: "time";
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    tacticsById: undefined;
    uid: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    title: undefined;
    navigationTitle: undefined;
    isTemplate: undefined;
    timezone: undefined;
    patternName: undefined;
    issueId: undefined;
    parentIssueIds: "";
    weekdays: "";
    hour: undefined;
    minute: undefined;
    scheduledNotificationIds: "";
    type: undefined;
}, "">;
export type DayDebriefGameplanValue = Inferred<typeof dayDebriefGameplanSchema>;
declare const dayDebriefGameplanSchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[];
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
                title: string;
                description: string;
                thumbnailUrl: string;
                duration: number;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        };
    };
    uid: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string | null | undefined;
    navigationTitle: string | null | undefined;
    isTemplate: boolean | null | undefined;
    timezone: string | null | undefined;
    patternName: string | null | undefined;
    issueId: string | null | undefined;
    parentIssueIds: string[] | null | undefined;
} & {
    type: "dayDebrief";
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    tacticsById: undefined;
    uid: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    title: undefined;
    navigationTitle: undefined;
    isTemplate: undefined;
    timezone: undefined;
    patternName: undefined;
    issueId: undefined;
    parentIssueIds: "";
    type: undefined;
}, "">;
export type LocationGameplanValue = Inferred<typeof locationGameplanSchema>;
declare const locationGameplanSchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[];
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
                title: string;
                description: string;
                thumbnailUrl: string;
                duration: number;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        };
    };
    uid: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string | null | undefined;
    navigationTitle: string | null | undefined;
    isTemplate: boolean | null | undefined;
    timezone: string | null | undefined;
    patternName: string | null | undefined;
    issueId: string | null | undefined;
    parentIssueIds: string[] | null | undefined;
} & {
    type: "location";
    locationId: string | null | undefined;
    mode: {};
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    tacticsById: undefined;
    uid: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    title: undefined;
    navigationTitle: undefined;
    isTemplate: undefined;
    timezone: undefined;
    patternName: undefined;
    issueId: undefined;
    parentIssueIds: "";
    type: undefined;
    locationId: undefined;
    mode: undefined;
}, "">;
export type GameplanValue = ImpulseGameplanValue | TimeGameplanValue | DayDebriefGameplanValue | LocationGameplanValue;
export { dayDebriefGameplanSchema, impulseGameplanSchema, locationGameplanSchema, timeGameplanSchema, };
export declare const gameplanSchema: yup.Lazy<{
    title?: string | null | undefined;
    isTemplate?: boolean | null | undefined;
    navigationTitle?: string | null | undefined;
    timezone?: string | null | undefined;
    patternName?: string | null | undefined;
    issueId?: string | null | undefined;
    parentIssueIds?: string[] | null | undefined;
    type: NonNullable<"impulse" | "impulseDebrief" | undefined>;
    uid: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    tacticIds: string[];
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
                title: string;
                description: string;
                thumbnailUrl: string;
                duration: number;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        };
    };
    suggestedTacticIds: string[];
    patternId: string;
} | {
    title?: string | null | undefined;
    isTemplate?: boolean | null | undefined;
    navigationTitle?: string | null | undefined;
    patternName?: string | null | undefined;
    issueId?: string | null | undefined;
    parentIssueIds?: string[] | null | undefined;
    scheduledNotificationIds?: string[] | null | undefined;
    type: "time";
    uid: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    tacticIds: string[];
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
                title: string;
                description: string;
                thumbnailUrl: string;
                duration: number;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        };
    };
    suggestedTacticIds: string[];
    timezone: string;
    weekdays: number[];
    hour: number;
    minute: number;
} | {
    title?: string | null | undefined;
    isTemplate?: boolean | null | undefined;
    navigationTitle?: string | null | undefined;
    timezone?: string | null | undefined;
    patternName?: string | null | undefined;
    issueId?: string | null | undefined;
    parentIssueIds?: string[] | null | undefined;
    type: "dayDebrief";
    uid: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    tacticIds: string[];
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
                title: string;
                description: string;
                thumbnailUrl: string;
                duration: number;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        };
    };
    suggestedTacticIds: string[];
} | {
    title?: string | null | undefined;
    isTemplate?: boolean | null | undefined;
    navigationTitle?: string | null | undefined;
    timezone?: string | null | undefined;
    patternName?: string | null | undefined;
    issueId?: string | null | undefined;
    parentIssueIds?: string[] | null | undefined;
    locationId?: string | null | undefined;
    type: "location";
    uid: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    tacticIds: string[];
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
                title: string;
                description: string;
                thumbnailUrl: string;
                duration: number;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledMinuteOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledLocationOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            backgroundColor: string;
        };
    };
    suggestedTacticIds: string[];
    mode: {};
}, yup.AnyObject, any>;
