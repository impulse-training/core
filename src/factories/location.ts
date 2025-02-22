import { faker } from '@faker-js/faker';
import * as Factory from 'factory.ts';
import { LocationValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeLocationFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<LocationValue>({
    uid: Factory.each(i => i.toString()),

    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    name: 'Home',
    latitude: Number(faker.address.latitude()),
    longitude: Number(faker.address.longitude()),
    address: faker.address.streetAddress(),
  });
