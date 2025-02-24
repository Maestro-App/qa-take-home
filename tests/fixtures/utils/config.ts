import dotenv from "dotenv";

dotenv.config();

export const baseHeader = {
  Authorization: process.env.BASE_AUTH_TOKEN!
};

export const baseUrl = process.env.BASE_URL as string;
export const baseEventUrl = process.env.BASE_EVENT_URL as string;
export const eventId = process.env.BASE_EVENT_ID as string;