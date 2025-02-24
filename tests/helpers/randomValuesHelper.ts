import { DateTime } from 'luxon';

export const currentDateHash = (): string => DateTime.local().toMillis().toString();
export const randomNumber = (length: number): number => Math.floor(Math.random() * length);