import { isEqual } from 'lodash';
import { LocationValue } from '../schema';
import {
  LocationReminderValue,
  ReminderValue,
  TimeReminderValue,
} from '../schema/reminder';

const days = [
  'Sundays',
  'Mondays',
  'Tuesdays',
  'Wednesdays',
  'Thursdays',
  'Fridays',
  'Saturdays',
];

abstract class Reminder {
  abstract get summary(): string | null;
}

export class TimeReminder extends Reminder {
  constructor(private id: string, private data: TimeReminderValue) {
    super();
  }

  get summary() {
    if (!this.data.weekdays?.length) return null;
    const weekdays = this.data.weekdays.sort();
    const weekdayNames = weekdays.map(dayNumber => days[dayNumber]);

    function getDaysDescription() {
      if (weekdays.length === 7) return 'Every day';

      if (isEqual(weekdays, [2, 3, 4, 5, 6])) return 'Every weekday';
      return 'On ' + new (Intl as any).ListFormat().format(weekdayNames);
    }

    const daysDescription = getDaysDescription();

    const time = new Date();
    time.setUTCHours(this.data.hour || 0);
    time.setUTCMinutes(this.data.minute || 0);

    const timeComponent = time
      ? time.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          timeZone: 'UTC',
        })
      : null;

    return `${daysDescription} at ${timeComponent}`;
  }
}

export class LocationReminder extends Reminder {
  constructor(
    private id: string,
    private data: LocationReminderValue,
    private location: LocationValue
  ) {
    super();
  }

  get summary() {
    return (
      'When I ' +
      (this.data.mode === 'enter' ? 'arrive at' : 'leave') +
      ' ' +
      this.location.name
    );
  }
}

export function reminderToClass(
  id: string,
  reminder: ReminderValue,
  location: LocationValue
) {
  if (reminder.type === 'time') {
    return new TimeReminder(id, reminder as TimeReminderValue);
  } else {
    return new LocationReminder(
      id,
      reminder as LocationReminderValue,
      location
    );
  }
}
