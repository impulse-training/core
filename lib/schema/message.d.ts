import * as yup from 'yup';
export declare const messageSchema: yup.ObjectSchema<{
    content: string;
    senderProfileId: string | undefined;
    files: (import("./utils/firestore").DocumentReferenceLike<unknown> | undefined)[] | undefined;
    role: NonNullable<"user" | "assistant" | undefined>;
}, yup.AnyObject, {
    content: undefined;
    senderProfileId: undefined;
    files: "";
    role: undefined;
}, "">;
export type MessageValue = yup.InferType<typeof messageSchema>;
