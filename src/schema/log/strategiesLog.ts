import * as yup from 'yup';
import { strategySchema } from '../strategy';
import { optionalStringArray, requiredStringArray } from '../utils/array';
import { documentReferenceSchema } from '../utils/firestore';
import { objectOf } from '../utils/objectOf';
import { logBaseSchema } from './base';
import { gptResponseMixin } from './utils/gpt';

export const strategiesLogSchema = logBaseSchema('strategies').shape({
  title: yup.string(),
  // Optionally, a strategies log can link to a suggestion, which was it's source
  sourceSuggestion: documentReferenceSchema,

  suggestedStrategyDocPaths: optionalStringArray,
  strategiesById: objectOf(strategySchema),
  // These are the tactics that the user has completed
  completedTacticIds: requiredStringArray,
  // ... and these are the tactics that Zara has followed up on with the user
  followedUpTacticIds: requiredStringArray,
  ...gptResponseMixin, // These logs can be generated by OpenAI
});

export type StrategiesLogValue = yup.InferType<typeof strategiesLogSchema>;
