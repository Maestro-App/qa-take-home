import { locations } from "../types/enums/locations";
import { currentDateHash, randomNumber } from "../helpers/randomValuesHelper";

export const { country, region, city } = getRandomCountryRegionAndCity();

export function getRandomEmail(user: string = 'random'): string {
  const userName: string = "olegbosyuk5";
  const randomId: string = `${user}_${currentDateHash()}_${randomNumber(1000)}`;
  const emailDomain: string = "gmail.com";

  return `${userName}+${randomId}@${emailDomain}`.toLowerCase();
}

export function getRandomCountryRegionAndCity(): { country: string, region: string, city: string } {
  return locations[Math.floor(Math.random() * locations.length)];
}
