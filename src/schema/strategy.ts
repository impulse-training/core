import * as yup from 'yup';
import { WithTacticsById, tacticSchema } from '.';
import { requiredStringArray } from './utils/array';
import { objectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const strategySchema = yup.object({
  ordinal: yup.number().notRequired(),
  name: yup.string().required(),
  tacticIds: requiredStringArray,
  tacticsById: objectOf(tacticSchema),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});

export type StrategyValue = WithTacticsById<
  yup.InferType<typeof strategySchema>
>;
