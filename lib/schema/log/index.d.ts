import * as yup from 'yup';
import { DayReviewLogValue } from './dayReview';
import { RegularLogValue } from './regular';
import { ShowTourLogValue } from './showTourLog';
import { TacticsLogValue } from './tacticsLog';
import { WhatsappMessageLogValue } from './whatsappMessageLog';
export * from './dayReview';
export * from './regular';
export * from './showTourLog';
export * from './tacticsLog';
export * from './whatsappMessageLog';
export * from './utils/guards';
export * from './utils/questionData';
export declare const logSchemas: Record<LogValue['type'], yup.ObjectSchema<LogValue>>;
export declare const logSchema: yup.Lazy<ValidatedLog, yup.AnyObject, any>;
type ValidatedLog = {
    [K in LogValue['type']]: yup.InferType<(typeof logSchemas)[K]>;
}[LogValue['type']];
export type LogValue = RegularLogValue | TacticsLogValue | ShowTourLogValue | DayReviewLogValue | WhatsappMessageLogValue;
