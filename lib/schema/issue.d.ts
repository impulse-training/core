import * as yup from 'yup';
export declare const issueSchema: yup.ObjectSchema<{
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
    parentId: string | null | undefined;
    name: string;
    hasDebriefQuestion: boolean | undefined;
    supportGroupId: string | undefined;
    synonyms: string[];
    path: string | null | undefined;
    parentIds: string[];
    parentNames: string[];
    profileCount: number | null | undefined;
    isFeatured: boolean | null | undefined;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    parentId: undefined;
    name: undefined;
    hasDebriefQuestion: undefined;
    supportGroupId: undefined;
    synonyms: "";
    path: undefined;
    parentIds: "";
    parentNames: "";
    profileCount: undefined;
    isFeatured: undefined;
}, "">;
export type IssueValue = yup.InferType<typeof issueSchema>;
