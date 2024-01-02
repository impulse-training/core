import * as Factory from 'factory.ts';
import { NewGameplanRecommendationValue, RecommendationValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeRecommendationFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<RecommendationValue, "createdAt" | "updatedAt" | "uid" | "tacticIds" | "tacticsById" | "title" | "gameplanId" | "ordinal" | "explanation" | "gameplanExplanation" | "templateForGameplansOfType" | "recommenderUid" | "recommenderName" | "appliedAt" | "dismissedAt" | "selectAllByDefault">;
export declare const makeExistingGameplanRecommendationFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<RecommendationValue, "createdAt" | "updatedAt" | "uid" | "tacticIds" | "tacticsById" | "title" | "gameplanId" | "ordinal" | "explanation" | "gameplanExplanation" | "templateForGameplansOfType" | "recommenderUid" | "recommenderName" | "appliedAt" | "dismissedAt" | "selectAllByDefault">;
export declare const makeNewGameplanRecommendationFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<NewGameplanRecommendationValue, "gameplan" | keyof import("../schema").RecommendationValueBase>;
