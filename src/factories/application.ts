import * as Factory from 'factory.ts';
import { ApplicationValue } from '../schema';

export const applicationFactory = Factory.makeFactory<ApplicationValue>({
  createdAt: null as any,
  updatedAt: null as any,
  dateOfBirth: '1900-01-01',
  state: 'pending',
  email: 'fake@impulse.training',
  duration: '1 month',
  addressLine1: '123 Pine Drive',
  city: 'Pineville',
  zipCode: '5159',
  country: 'Australia',
  message: 'I want to stop smoking.',
  name: 'Moopy',
  phone: '123456789',
});
