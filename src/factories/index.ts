import { TimestampLike } from '../utils/firestore/TimestampLike';
import { makeBehaviorFactory } from './behavior';
import { makeDayFactory } from './day';
import { makeDaysSummaryFactory } from './daysSummary';
import { makeIssueFactory } from './issue';
import { makeLocationFactory } from './location';
import { makeLogFactories } from './log';
import { makeProfileFactory } from './profile';
import { makeRoutineFactory } from './routine';
import { makeSuggestionFactory } from './suggestion';
import { makeTacticFactory } from './tactic';

// Our admin and client apps use the same factories, but the firebase-admin versus firebase client
// libraries respectively. These use different Timestamp classes, so we pass in the class as an
// injected dependency
export function makeFactories(TimestampKlass: typeof TimestampLike) {
  return {
    dayFactory: makeDayFactory(TimestampKlass),
    issueFactory: makeIssueFactory(TimestampKlass),
    locationFactory: makeLocationFactory(TimestampKlass),
    daysSummaryFactory: makeDaysSummaryFactory(TimestampKlass),
    profileFactory: makeProfileFactory(TimestampKlass),
    routineFactory: makeRoutineFactory(TimestampKlass),
    tacticFactory: makeTacticFactory(TimestampKlass),
    suggestionFactory: makeSuggestionFactory(TimestampKlass),
    behaviorFactory: makeBehaviorFactory(TimestampKlass),
    ...makeLogFactories(TimestampKlass),
  };
}
