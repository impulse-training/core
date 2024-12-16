import * as yup from 'yup';
import { CallLogValue } from './call';
import { DayReviewLogValue } from './dayReview';
import { RegularLogValue } from './regular';
import { ShowTourLogValue } from './showTourLog';
import { WhatsappMessageLogValue } from './whatsappMessageLog';
export * from './dayReview';
export * from './regular';
export * from './showTourLog';
export * from './whatsappMessageLog';
export * from './utils/behaviorData';
export * from './utils/emotionData';
export * from './utils/tacticData';
export declare const logSchemas: Record<LogValue['type'], yup.ObjectSchema<LogValue>>;
export declare const logSchema: yup.Lazy<ValidatedLog, yup.AnyObject, any>;
type ValidatedLog = {
    [K in LogValue['type']]: yup.InferType<(typeof logSchemas)[K]>;
}[LogValue['type']];
export type LogValue = RegularLogValue | CallLogValue | ShowTourLogValue | DayReviewLogValue | WhatsappMessageLogValue;
