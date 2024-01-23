import { TimestampLike } from '../utils/TimestampLike';
import { LogValue } from './logs';
export interface MessageValue {
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    deletedAt?: TimestampLike;
    fromUid: string;
    text: string;
    href?: string;
    log?: LogValue;
    fromName: string;
}
