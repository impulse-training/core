import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makePatternFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    createdAt?: TimestampLike | import("yup").Maybe<null>;
    updatedAt?: TimestampLike | import("yup").Maybe<null>;
    parentIssueIds?: string[] | undefined;
    supportGroupIds?: string[] | undefined;
    notification?: import("yup").Maybe<{} | undefined> | {
        title: string;
        body: string;
    };
    dailySetbackThreshold?: import("yup").Maybe<number | undefined>;
    setbackThreshold?: import("yup").Maybe<number | undefined>;
    issueId?: import("yup").Maybe<string | undefined>;
    sendWeeklyReports?: import("yup").Maybe<boolean | undefined>;
    uid: string;
    name: string;
    ordinal: number;
    measureTactic: {
        createdAt?: TimestampLike | import("yup").Maybe<null>;
        updatedAt?: TimestampLike | import("yup").Maybe<null>;
        uid?: string | null | undefined;
        sourceId?: string | undefined;
        subtitle?: import("yup").Maybe<string | undefined>;
        description?: string | null | undefined;
        image?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | null | undefined;
        isTemplate?: boolean | null | undefined;
        language?: string | null | undefined;
        href?: string | null | undefined;
        categoryIds?: (string | undefined)[] | null | undefined;
        isShared?: boolean | null | undefined;
        isResponseRequired?: boolean | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
        isAvailableForRecommendation?: boolean | null | undefined;
        numberOfLikes?: number | null | undefined;
        isSuggested?: boolean | undefined;
        lowEmoji?: import("yup").Maybe<string | undefined>;
        highEmoji?: import("yup").Maybe<string | undefined>;
        type: "measure-slider";
        title: string;
        backgroundColor: string;
    } | {
        createdAt?: TimestampLike | import("yup").Maybe<null>;
        updatedAt?: TimestampLike | import("yup").Maybe<null>;
        uid?: string | null | undefined;
        sourceId?: string | undefined;
        subtitle?: import("yup").Maybe<string | undefined>;
        description?: string | null | undefined;
        image?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | null | undefined;
        isTemplate?: boolean | null | undefined;
        language?: string | null | undefined;
        href?: string | null | undefined;
        categoryIds?: (string | undefined)[] | null | undefined;
        isShared?: boolean | null | undefined;
        isResponseRequired?: boolean | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
        isAvailableForRecommendation?: boolean | null | undefined;
        numberOfLikes?: number | null | undefined;
        isSuggested?: boolean | undefined;
        type: "measure-time";
        title: string;
        backgroundColor: string;
    } | {
        createdAt?: TimestampLike | import("yup").Maybe<null>;
        updatedAt?: TimestampLike | import("yup").Maybe<null>;
        uid?: string | null | undefined;
        sourceId?: string | undefined;
        subtitle?: import("yup").Maybe<string | undefined>;
        description?: string | null | undefined;
        image?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | null | undefined;
        isTemplate?: boolean | null | undefined;
        language?: string | null | undefined;
        href?: string | null | undefined;
        categoryIds?: (string | undefined)[] | null | undefined;
        isShared?: boolean | null | undefined;
        isResponseRequired?: boolean | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
        isAvailableForRecommendation?: boolean | null | undefined;
        numberOfLikes?: number | null | undefined;
        isSuggested?: boolean | undefined;
        type: "measure-counter";
        title: string;
        backgroundColor: string;
    };
}, "uid" | "name" | "ordinal" | "measureTactic" | ("createdAt" | "updatedAt" | "parentIssueIds" | "supportGroupIds" | "notification" | "dailySetbackThreshold" | "setbackThreshold" | "issueId" | "sendWeeklyReports")>;
