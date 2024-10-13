import * as yup from 'yup';
import { ActionRecapLogValue } from './actionRecap';
import { AnimationLogValue } from './animationLog';
import { DayReviewLogValue } from './dayReview';
import { ImpulseLogValue } from './impulseLog';
import { MessageLogValue } from './messageLog';
import { ShowTourLogValue } from './showTourLog';
import { TacticsLogValue } from './tacticsLog';
import { WhatsappMessageLogValue } from './whatsappMessageLog';
export * from './actionRecap';
export * from './animationLog';
export * from './dayReview';
export * from './impulseLog';
export * from './messageLog';
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
export type LogValue = AnimationLogValue | ImpulseLogValue | MessageLogValue | ActionRecapLogValue | TacticsLogValue | ShowTourLogValue | DayReviewLogValue | WhatsappMessageLogValue;
