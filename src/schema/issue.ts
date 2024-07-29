import * as yup from 'yup';
import { requiredStringArray } from './utils/array';
import { optionalTimestampSchema } from './utils/timestamp';

export const issueSchema = yup.object().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  parentId: yup.string().nullable(),
  name: yup.string().required(),
  ordinal: yup.number().required(),
  debriefQuestionPrompt: yup.string().required(),
  synonyms: yup
    .array()
    .of(yup.string().required())
    .required()
    .test('includes-name', 'Synonyms must include name', function (synonyms) {
      return synonyms.includes(this.parent.name);
    }),
  shouldGenerateStrategies: yup.boolean(),
  path: yup.string().nullable(),
  parentIds: requiredStringArray,
  parentNames: requiredStringArray,
  profileCount: yup.number().nullable(),
  isFeatured: yup.boolean().nullable(),
});
export type IssueValue = yup.InferType<typeof issueSchema>;
