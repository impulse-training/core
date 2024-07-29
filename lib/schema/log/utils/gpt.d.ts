import * as yup from 'yup';
export declare const gptResponseMixin: {
    openAiRequestPayload: yup.StringSchema<string | undefined, yup.AnyObject, undefined, "">;
    openAiChoiceResponse: yup.MixedSchema<{} | undefined, yup.AnyObject, undefined, "">;
};
export declare const gptMessageSchema: yup.ObjectSchema<{
    role: NonNullable<"system" | "user" | "assistant" | undefined>;
    content: string;
}, yup.AnyObject, {
    role: undefined;
    content: undefined;
}, "">;
