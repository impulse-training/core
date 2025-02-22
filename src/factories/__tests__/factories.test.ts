import { forEach } from 'lodash';
import { Lazy, Schema, ValidationError } from 'yup';
import { makeFactories } from '../../factories';
import {
  daySchema,
  daysSummarySchema,
  issueSchema,
  locationSchema,
  logSchema,
  profileSchema,
  routineSchema,
  suggestionSchema,
  tacticSchema,
} from '../../schema';
import { behaviorSchema } from '../../schema/behavior';
import { TimestampLike } from '../../utils/firestore/TimestampLike';

const factories = makeFactories(TimestampLike);

describe('factories', () => {
  forEach(factories, (factory, name) => {
    it(name, () => {
      const document = factory.build({});
      const snap = { id: 'abc123', data: () => document };
      const schema = schemaMap[name as keyof typeof factories];

      if (!schema)
        return console.log(
          'No schema exists for ' + name + ' factory - exiting'
        );

      try {
        const result = schema.validateSync(snap.data(), {
          abortEarly: false,
        });
        expect(result).toBeDefined();
      } catch (error) {
        if (error instanceof ValidationError) {
          // Log each validation error with its path and message
          error.inner.forEach(err => {
            console.error(
              `Validation error for ${name} at ${err.path}: ${err.message}`
            );
          });
        } else {
          console.error('An unexpected error occurred:', error);
        }
        // Rethrow the error to fail the test
        throw error;
      }
    });
  });
});

const schemaMap: Record<keyof typeof factories, null | Schema | Lazy<unknown>> =
  {
    locationFactory: locationSchema,
    daysSummaryFactory: daysSummarySchema,
    dayFactory: daySchema,
    regularLogFactory: logSchema,
    profileFactory: profileSchema,
    issueFactory: issueSchema,
    suggestionFactory: suggestionSchema,
    tacticFactory: tacticSchema,
    behaviorFactory: behaviorSchema,
    routineFactory: routineSchema,
  };
