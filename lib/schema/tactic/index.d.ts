import * as yup from 'yup';
import { AudioTacticValue } from './audio';
import { BreatheTacticValue } from './breathe';
import { EmotionsTacticValue } from './emotions';
import { FolderTacticValue } from './folder';
import { MeasureTacticValue } from './measure';
import { PhoneTacticValue } from './phone';
import { QuestionTacticValue } from './question';
import { StepsTacticValue } from './steps';
import { TaskTacticValue } from './task';
import { UrgeSurfingTacticValue } from './urgeSurfing';
import { VideoTacticValue } from './video';
export * from './audio';
export * from './breathe';
export * from './emotions';
export * from './folder';
export * from './measure';
export * from './phone';
export * from './question';
export * from './steps';
export * from './task';
export * from './urgeSurfing';
export * from './video';
export * from './utils';
export type TacticValue = PhoneTacticValue | AudioTacticValue | UrgeSurfingTacticValue | VideoTacticValue | QuestionTacticValue | TaskTacticValue | MeasureTacticValue | FolderTacticValue | BreatheTacticValue | StepsTacticValue | EmotionsTacticValue;
export declare const tacticSchemas: Record<TacticValue['type'], yup.ObjectSchema<TacticValue>>;
export declare const tacticSchema: yup.Lazy<ValidatedTactic, yup.AnyObject, any>;
type ValidatedTactic = {
    [K in TacticValue['type']]: yup.InferType<(typeof tacticSchemas)[K]>;
}[TacticValue['type']];
export type WithTacticsById<T, TT = TacticValue> = Omit<T, 'tacticsById'> & {
    tacticsById: Record<string, TT>;
};
