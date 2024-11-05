import * as yup from 'yup';
import { optionalTimestampSchema } from './timestamp';

export const fileSchema = yup.object({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  storagePath: yup.string().required(),
  uri: yup.string().required(),
  localFilePath: yup.string().notRequired(),
  isDeleted: yup.boolean(),
  // Add an optional field to store audio waveform
  waveForm: yup.string().notRequired(),

  thumbnailStoragePath: yup.string().notRequired(),
  thumbnailUri: yup.string().notRequired(),
});

export type FileValue = yup.InferType<typeof fileSchema>;
