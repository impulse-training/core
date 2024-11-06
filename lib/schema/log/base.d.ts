import * as yup from 'yup';
export declare function logBaseSchema<K extends string>(type: K): yup.ObjectSchema<{
    type: yup.Defined<K>;
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
    uid: string;
    audioFile: {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        content?: string | undefined;
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        waveForm?: yup.Maybe<string | undefined>;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        contentType: string;
        storagePath: string;
        uri: string;
    } | undefined;
    audioDurationSeconds: number | undefined;
    audioWaveform: string | undefined;
    issueId: string | null | undefined;
    issueName: string | undefined;
    completedTacticIds: string[];
    tacticsById: {
        [x: string]: {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            uid?: string | undefined;
            setbackThreshold?: number | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            prompt?: string | undefined;
            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            sharedWithIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isShared?: boolean | undefined;
            description?: string | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                content?: string | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: yup.Maybe<string | undefined>;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            type: "audio";
            ordinal: number;
            recording: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                content?: string | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: yup.Maybe<string | undefined>;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            };
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            uid?: string | undefined;
            repeat?: yup.Maybe<number | undefined>;
            setbackThreshold?: number | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            prompt?: string | undefined;
            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            sharedWithIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isShared?: boolean | undefined;
            description?: string | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                content?: string | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: yup.Maybe<string | undefined>;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            type: "breathingExercise";
            ordinal: number;
            inFor: number;
            holdFor: number;
            outFor: number;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            uid?: string | undefined;
            setbackThreshold?: number | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            prompt?: string | undefined;
            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            sharedWithIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isShared?: boolean | undefined;
            description?: string | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                content?: string | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: yup.Maybe<string | undefined>;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            type: "link";
            ordinal: number;
            url: string;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            uid?: string | undefined;
            setbackThreshold?: number | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            prompt?: string | undefined;
            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            sharedWithIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isShared?: boolean | undefined;
            description?: string | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                content?: string | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: yup.Maybe<string | undefined>;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            type: "notifyASupportPerson";
            ordinal: number;
            contactIds: string[];
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            uid?: string | undefined;
            setbackThreshold?: number | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            prompt?: string | undefined;
            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            sharedWithIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isShared?: boolean | undefined;
            description?: string | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                content?: string | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: yup.Maybe<string | undefined>;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            type: "notifySupportGroup";
            ordinal: number;
            supportGroup: import("../utils/firestore").DocumentReferenceLike<unknown>;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            uid?: string | undefined;
            setbackThreshold?: number | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            prompt?: string | undefined;
            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            sharedWithIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isShared?: boolean | undefined;
            description?: string | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                content?: string | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: yup.Maybe<string | undefined>;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            type: "question";
            ordinal: number;
            question: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
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
                setbackThreshold?: number | undefined;
                recommendedForIssueIds?: string[] | undefined;
                isPublic?: boolean | undefined;
                categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                options?: ({
                    label?: string | undefined;
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
                    color?: string | undefined;
                    textColor?: string | undefined;
                    setbackThreshold?: number | undefined;
                    greaterThan?: number | undefined;
                    lessThanOrEqualTo?: number | undefined;
                    type: "numeric";
                    text: string;
                } | {
                    label?: string | undefined;
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
                    color?: string | undefined;
                    textColor?: string | undefined;
                    type: "string";
                    text: string;
                })[] | undefined;
                ordinals?: {
                    [x: string]: number;
                } | null | undefined;
                templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                writeAnswerToProfileMemoryKey?: string | undefined;
                type: "counter";
                prompt: string;
                ordinal: number;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
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
                recommendedForIssueIds?: string[] | undefined;
                isPublic?: boolean | undefined;
                categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                options?: ({
                    label?: string | undefined;
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
                    color?: string | undefined;
                    textColor?: string | undefined;
                    setbackThreshold?: number | undefined;
                    greaterThan?: number | undefined;
                    lessThanOrEqualTo?: number | undefined;
                    type: "numeric";
                    text: string;
                } | {
                    label?: string | undefined;
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
                    color?: string | undefined;
                    textColor?: string | undefined;
                    type: "string";
                    text: string;
                })[] | undefined;
                ordinals?: {
                    [x: string]: number;
                } | null | undefined;
                templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                writeAnswerToProfileMemoryKey?: string | undefined;
                type: "issue";
                prompt: string;
                ordinal: number;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
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
                recommendedForIssueIds?: string[] | undefined;
                isPublic?: boolean | undefined;
                categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                ordinals?: {
                    [x: string]: number;
                } | null | undefined;
                templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                writeAnswerToProfileMemoryKey?: string | undefined;
                type: "multipleChoice";
                prompt: string;
                options: ({
                    label?: string | undefined;
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
                    color?: string | undefined;
                    textColor?: string | undefined;
                    setbackThreshold?: number | undefined;
                    greaterThan?: number | undefined;
                    lessThanOrEqualTo?: number | undefined;
                    type: "numeric";
                    text: string;
                } | {
                    label?: string | undefined;
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
                    color?: string | undefined;
                    textColor?: string | undefined;
                    type: "string";
                    text: string;
                })[];
                ordinal: number;
                canAddNewOptions: NonNullable<boolean | undefined>;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
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
                setbackThreshold?: number | undefined;
                recommendedForIssueIds?: string[] | undefined;
                isPublic?: boolean | undefined;
                categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                options?: ({
                    label?: string | undefined;
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
                    color?: string | undefined;
                    textColor?: string | undefined;
                    setbackThreshold?: number | undefined;
                    greaterThan?: number | undefined;
                    lessThanOrEqualTo?: number | undefined;
                    type: "numeric";
                    text: string;
                } | {
                    label?: string | undefined;
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
                    color?: string | undefined;
                    textColor?: string | undefined;
                    type: "string";
                    text: string;
                })[] | undefined;
                ordinals?: {
                    [x: string]: number;
                } | null | undefined;
                templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                writeAnswerToProfileMemoryKey?: string | undefined;
                lowEmoji?: yup.Maybe<string | undefined>;
                highEmoji?: yup.Maybe<string | undefined>;
                type: "scaleOf1To10";
                prompt: string;
                ordinal: number;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
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
                recommendedForIssueIds?: string[] | undefined;
                isPublic?: boolean | undefined;
                categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                options?: ({
                    label?: string | undefined;
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
                    color?: string | undefined;
                    textColor?: string | undefined;
                    setbackThreshold?: number | undefined;
                    greaterThan?: number | undefined;
                    lessThanOrEqualTo?: number | undefined;
                    type: "numeric";
                    text: string;
                } | {
                    label?: string | undefined;
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
                    color?: string | undefined;
                    textColor?: string | undefined;
                    type: "string";
                    text: string;
                })[] | undefined;
                ordinals?: {
                    [x: string]: number;
                } | null | undefined;
                templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                writeAnswerToProfileMemoryKey?: string | undefined;
                type: "text";
                prompt: string;
                ordinal: number;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
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
                setbackThreshold?: number | undefined;
                recommendedForIssueIds?: string[] | undefined;
                isPublic?: boolean | undefined;
                categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                options?: ({
                    label?: string | undefined;
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
                    color?: string | undefined;
                    textColor?: string | undefined;
                    setbackThreshold?: number | undefined;
                    greaterThan?: number | undefined;
                    lessThanOrEqualTo?: number | undefined;
                    type: "numeric";
                    text: string;
                } | {
                    label?: string | undefined;
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
                    color?: string | undefined;
                    textColor?: string | undefined;
                    type: "string";
                    text: string;
                })[] | undefined;
                ordinals?: {
                    [x: string]: number;
                } | null | undefined;
                templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                writeAnswerToProfileMemoryKey?: string | undefined;
                type: "time";
                prompt: string;
                ordinal: number;
            };
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            uid?: string | undefined;
            setbackThreshold?: number | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            prompt?: string | undefined;
            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            sharedWithIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isShared?: boolean | undefined;
            description?: string | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                content?: string | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: yup.Maybe<string | undefined>;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            type: "steps";
            ordinal: number;
            targetSteps: number;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            uid?: string | undefined;
            setbackThreshold?: number | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            sharedWithIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isShared?: boolean | undefined;
            description?: string | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                content?: string | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: yup.Maybe<string | undefined>;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            type: "task";
            prompt: string;
            ordinal: number;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            uid?: string | undefined;
            setbackThreshold?: number | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            prompt?: string | undefined;
            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            sharedWithIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isShared?: boolean | undefined;
            description?: string | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                content?: string | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: yup.Maybe<string | undefined>;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            type: "video";
            ordinal: number;
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
            };
        };
    };
    questionsById: {
        [x: string]: {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
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
            setbackThreshold?: number | undefined;
            recommendedForIssueIds?: string[] | undefined;
            isPublic?: boolean | undefined;
            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
            options?: ({
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                setbackThreshold?: number | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                type: "numeric";
                text: string;
            } | {
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                type: "string";
                text: string;
            })[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            type: "counter";
            prompt: string;
            ordinal: number;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
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
            recommendedForIssueIds?: string[] | undefined;
            isPublic?: boolean | undefined;
            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
            options?: ({
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                setbackThreshold?: number | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                type: "numeric";
                text: string;
            } | {
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                type: "string";
                text: string;
            })[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            type: "issue";
            prompt: string;
            ordinal: number;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
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
            recommendedForIssueIds?: string[] | undefined;
            isPublic?: boolean | undefined;
            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            type: "multipleChoice";
            prompt: string;
            options: ({
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                setbackThreshold?: number | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                type: "numeric";
                text: string;
            } | {
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                type: "string";
                text: string;
            })[];
            ordinal: number;
            canAddNewOptions: NonNullable<boolean | undefined>;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
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
            setbackThreshold?: number | undefined;
            recommendedForIssueIds?: string[] | undefined;
            isPublic?: boolean | undefined;
            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
            options?: ({
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                setbackThreshold?: number | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                type: "numeric";
                text: string;
            } | {
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                type: "string";
                text: string;
            })[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            type: "scaleOf1To10";
            prompt: string;
            ordinal: number;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
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
            recommendedForIssueIds?: string[] | undefined;
            isPublic?: boolean | undefined;
            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
            options?: ({
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                setbackThreshold?: number | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                type: "numeric";
                text: string;
            } | {
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                type: "string";
                text: string;
            })[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            type: "text";
            prompt: string;
            ordinal: number;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
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
            setbackThreshold?: number | undefined;
            recommendedForIssueIds?: string[] | undefined;
            isPublic?: boolean | undefined;
            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
            options?: ({
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                setbackThreshold?: number | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                type: "numeric";
                text: string;
            } | {
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                type: "string";
                text: string;
            })[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            type: "time";
            prompt: string;
            ordinal: number;
        };
    } | null | undefined;
    questionData: {
        [x: string]: {
            label?: string | undefined;
            color?: string | undefined;
            setbackThreshold?: number | undefined;
            idValue?: string | undefined;
            numericValue?: number | undefined;
            setAt: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            stringValue: string;
            unit: string;
        };
    } | null | undefined;
    submittedAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    blandPathwayChatId: string | undefined;
    text: string | undefined;
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    dateString: string;
    profileEmojiIDString: string | undefined;
    tacticId: string | null | undefined;
    tactic: ({
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        uid?: string | undefined;
        setbackThreshold?: number | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        prompt?: string | undefined;
        sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
        sharedWithIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        isShared?: boolean | undefined;
        description?: string | null | undefined;
        pastTenseTitle?: string | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            content?: string | undefined;
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: yup.Maybe<string | undefined>;
            thumbnailStoragePath?: yup.Maybe<string | undefined>;
            thumbnailUri?: yup.Maybe<string | undefined>;
            contentType: string;
            storagePath: string;
            uri: string;
        } | undefined;
        backgroundColor?: string | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        type: "audio";
        ordinal: number;
        recording: {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            content?: string | undefined;
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: yup.Maybe<string | undefined>;
            thumbnailStoragePath?: yup.Maybe<string | undefined>;
            thumbnailUri?: yup.Maybe<string | undefined>;
            contentType: string;
            storagePath: string;
            uri: string;
        };
    } | {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        uid?: string | undefined;
        repeat?: yup.Maybe<number | undefined>;
        setbackThreshold?: number | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        prompt?: string | undefined;
        sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
        sharedWithIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        isShared?: boolean | undefined;
        description?: string | null | undefined;
        pastTenseTitle?: string | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            content?: string | undefined;
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: yup.Maybe<string | undefined>;
            thumbnailStoragePath?: yup.Maybe<string | undefined>;
            thumbnailUri?: yup.Maybe<string | undefined>;
            contentType: string;
            storagePath: string;
            uri: string;
        } | undefined;
        backgroundColor?: string | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        type: "breathingExercise";
        ordinal: number;
        inFor: number;
        holdFor: number;
        outFor: number;
    } | {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        uid?: string | undefined;
        setbackThreshold?: number | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        prompt?: string | undefined;
        sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
        sharedWithIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        isShared?: boolean | undefined;
        description?: string | null | undefined;
        pastTenseTitle?: string | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            content?: string | undefined;
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: yup.Maybe<string | undefined>;
            thumbnailStoragePath?: yup.Maybe<string | undefined>;
            thumbnailUri?: yup.Maybe<string | undefined>;
            contentType: string;
            storagePath: string;
            uri: string;
        } | undefined;
        backgroundColor?: string | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        type: "link";
        ordinal: number;
        url: string;
    } | {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        uid?: string | undefined;
        setbackThreshold?: number | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        prompt?: string | undefined;
        sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
        sharedWithIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        isShared?: boolean | undefined;
        description?: string | null | undefined;
        pastTenseTitle?: string | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            content?: string | undefined;
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: yup.Maybe<string | undefined>;
            thumbnailStoragePath?: yup.Maybe<string | undefined>;
            thumbnailUri?: yup.Maybe<string | undefined>;
            contentType: string;
            storagePath: string;
            uri: string;
        } | undefined;
        backgroundColor?: string | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        type: "notifyASupportPerson";
        ordinal: number;
        contactIds: string[];
    } | {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        uid?: string | undefined;
        setbackThreshold?: number | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        prompt?: string | undefined;
        sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
        sharedWithIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        isShared?: boolean | undefined;
        description?: string | null | undefined;
        pastTenseTitle?: string | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            content?: string | undefined;
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: yup.Maybe<string | undefined>;
            thumbnailStoragePath?: yup.Maybe<string | undefined>;
            thumbnailUri?: yup.Maybe<string | undefined>;
            contentType: string;
            storagePath: string;
            uri: string;
        } | undefined;
        backgroundColor?: string | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        type: "notifySupportGroup";
        ordinal: number;
        supportGroup: import("../utils/firestore").DocumentReferenceLike<unknown>;
    } | {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        uid?: string | undefined;
        setbackThreshold?: number | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        prompt?: string | undefined;
        sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
        sharedWithIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        isShared?: boolean | undefined;
        description?: string | null | undefined;
        pastTenseTitle?: string | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            content?: string | undefined;
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: yup.Maybe<string | undefined>;
            thumbnailStoragePath?: yup.Maybe<string | undefined>;
            thumbnailUri?: yup.Maybe<string | undefined>;
            contentType: string;
            storagePath: string;
            uri: string;
        } | undefined;
        backgroundColor?: string | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        type: "question";
        ordinal: number;
        question: {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
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
            setbackThreshold?: number | undefined;
            recommendedForIssueIds?: string[] | undefined;
            isPublic?: boolean | undefined;
            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
            options?: ({
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                setbackThreshold?: number | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                type: "numeric";
                text: string;
            } | {
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                type: "string";
                text: string;
            })[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            type: "counter";
            prompt: string;
            ordinal: number;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
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
            recommendedForIssueIds?: string[] | undefined;
            isPublic?: boolean | undefined;
            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
            options?: ({
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                setbackThreshold?: number | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                type: "numeric";
                text: string;
            } | {
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                type: "string";
                text: string;
            })[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            type: "issue";
            prompt: string;
            ordinal: number;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
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
            recommendedForIssueIds?: string[] | undefined;
            isPublic?: boolean | undefined;
            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            type: "multipleChoice";
            prompt: string;
            options: ({
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                setbackThreshold?: number | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                type: "numeric";
                text: string;
            } | {
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                type: "string";
                text: string;
            })[];
            ordinal: number;
            canAddNewOptions: NonNullable<boolean | undefined>;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
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
            setbackThreshold?: number | undefined;
            recommendedForIssueIds?: string[] | undefined;
            isPublic?: boolean | undefined;
            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
            options?: ({
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                setbackThreshold?: number | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                type: "numeric";
                text: string;
            } | {
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                type: "string";
                text: string;
            })[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            type: "scaleOf1To10";
            prompt: string;
            ordinal: number;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
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
            recommendedForIssueIds?: string[] | undefined;
            isPublic?: boolean | undefined;
            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
            options?: ({
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                setbackThreshold?: number | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                type: "numeric";
                text: string;
            } | {
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                type: "string";
                text: string;
            })[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            type: "text";
            prompt: string;
            ordinal: number;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
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
            setbackThreshold?: number | undefined;
            recommendedForIssueIds?: string[] | undefined;
            isPublic?: boolean | undefined;
            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
            options?: ({
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                setbackThreshold?: number | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                type: "numeric";
                text: string;
            } | {
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                type: "string";
                text: string;
            })[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            type: "time";
            prompt: string;
            ordinal: number;
        };
    } | {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        uid?: string | undefined;
        setbackThreshold?: number | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        prompt?: string | undefined;
        sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
        sharedWithIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        isShared?: boolean | undefined;
        description?: string | null | undefined;
        pastTenseTitle?: string | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            content?: string | undefined;
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: yup.Maybe<string | undefined>;
            thumbnailStoragePath?: yup.Maybe<string | undefined>;
            thumbnailUri?: yup.Maybe<string | undefined>;
            contentType: string;
            storagePath: string;
            uri: string;
        } | undefined;
        backgroundColor?: string | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        type: "steps";
        ordinal: number;
        targetSteps: number;
    } | {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        uid?: string | undefined;
        setbackThreshold?: number | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
        sharedWithIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        isShared?: boolean | undefined;
        description?: string | null | undefined;
        pastTenseTitle?: string | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            content?: string | undefined;
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: yup.Maybe<string | undefined>;
            thumbnailStoragePath?: yup.Maybe<string | undefined>;
            thumbnailUri?: yup.Maybe<string | undefined>;
            contentType: string;
            storagePath: string;
            uri: string;
        } | undefined;
        backgroundColor?: string | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        type: "task";
        prompt: string;
        ordinal: number;
    } | {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        uid?: string | undefined;
        setbackThreshold?: number | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        prompt?: string | undefined;
        sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
        sharedWithIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        isShared?: boolean | undefined;
        description?: string | null | undefined;
        pastTenseTitle?: string | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            content?: string | undefined;
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: yup.Maybe<string | undefined>;
            thumbnailStoragePath?: yup.Maybe<string | undefined>;
            thumbnailUri?: yup.Maybe<string | undefined>;
            contentType: string;
            storagePath: string;
            uri: string;
        } | undefined;
        backgroundColor?: string | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        type: "video";
        ordinal: number;
        video: {
            storagePath?: string | null | undefined;
            url?: string | null | undefined;
        };
    }) | yup.Maybe<{} | undefined>;
    tacticData: {
        [x: string]: {} | undefined;
    } | null | undefined;
    isGptSender: boolean | undefined;
    senderUid: string | null | undefined;
}, yup.AnyObject, {
    type: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    uid: undefined;
    audioFile: undefined;
    audioDurationSeconds: undefined;
    audioWaveform: undefined;
    issueId: undefined;
    issueName: undefined;
    completedTacticIds: "";
    tacticsById: undefined;
    questionsById: undefined;
    questionData: undefined;
    submittedAt: undefined;
    blandPathwayChatId: undefined;
    text: undefined;
    date: {
        seconds: undefined;
        nanoseconds: undefined;
        isEqual: undefined;
        toMillis: undefined;
        toDate: undefined;
    };
    dateString: undefined;
    profileEmojiIDString: undefined;
    tacticId: undefined;
    tactic: undefined;
    tacticData: undefined;
    isGptSender: undefined;
    senderUid: undefined;
}, "">;
