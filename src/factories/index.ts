import { FakeTimestamp } from '../utils/FakeTimestamp';
import { makeApplicationFactory } from './application';
import { makeChallengeFactory } from './challenge';
import {
  makeDebriefGameplanFactory,
  makeLocationGameplanFactory,
  makePatternGameplanFactory,
  makeTimeGameplanFactory,
} from './gameplan';
import { makeIssueFactory } from './issue';
import { makeLocationFactory } from './location';
import { makeLogSummaryFactory } from './logSummary';
import {
  makeDebriefLogFactory,
  makeImpulseFactory,
  makeMotionLogFactory,
  makeTimeLogFactory,
} from './logs';
import { makePatternFactory } from './pattern';
import { makeAdminProfileFactory, makeProfileFactory } from './profile';
import { makeSupportGroupFactory } from './supportGroup';
import { makeTacticFactory } from './tactic';

// Our admin and client apps use the same factories, but the firebase-admin versus firebase client
// libraries respectively. These use different Timestamp classes, so we pass in the class as an
// injected dependency
export function makeFactories(TimestampKlass: typeof FakeTimestamp) {
  return {
    applicationFactory: makeApplicationFactory(TimestampKlass),
    challengeFactory: makeChallengeFactory(TimestampKlass),
    impulseFactory: makeImpulseFactory(TimestampKlass),
    timeLogFactory: makeTimeLogFactory(TimestampKlass),
    motionLogFactory: makeMotionLogFactory(TimestampKlass),
    debriefLogFactory: makeDebriefLogFactory(TimestampKlass),
    locationFactory: makeLocationFactory(TimestampKlass),
    logSummaryFactory: makeLogSummaryFactory(TimestampKlass),
    profileFactory: makeProfileFactory(TimestampKlass),
    issueFactory: makeIssueFactory(TimestampKlass),
    adminProfileFactory: makeAdminProfileFactory(TimestampKlass),
    supportGroupFactory: makeSupportGroupFactory(TimestampKlass),
    patternGameplanFactory: makePatternGameplanFactory(TimestampKlass),
    debriefGameplanFactory: makeDebriefGameplanFactory(TimestampKlass),
    timeGameplanFactory: makeTimeGameplanFactory(TimestampKlass),
    patternFactory: makePatternFactory(TimestampKlass),
    locationGameplanFactory: makeLocationGameplanFactory(TimestampKlass),
    tacticFactory: makeTacticFactory(TimestampKlass),
  };
}

// We also directly export all factories, using our "FakeTimestamp" class, for unit testing in this
// library
export const {
  applicationFactory,
  challengeFactory,
  impulseFactory,
  timeLogFactory,
  motionLogFactory,
  debriefLogFactory,
  logSummaryFactory,
  debriefGameplanFactory,
  profileFactory,
  supportGroupFactory,
  tacticFactory,
} = makeFactories(FakeTimestamp);
