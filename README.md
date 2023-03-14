# Astronomical Seasons

This package calculates the astronomical season for a given date or year.

Astronomical seasons are based around natural rotation of the Earth around the sun. Each season begins with either a solstice or an equinox, and which season those represent depends on which side of the equator you're on. Learn more about astronomical and meteorological (month-based) seasons [here](https://www.ncei.noaa.gov/news/meteorological-versus-astronomical-seasons).

**Features**

- Get the current season of a date
- Get the date and time of the solstice/equinox in a month, which marks the beginning of a season
  - As a UTC datetime
  - As a Julian Day

## Installation

```bash
yarn add @postlight/seasons

# or

npm install @postlight/seasons
```

## Usage

The package can be called using import or required, and has been built for both CommonJS and ECMAScript module formats.

Below example demonstrates how to get the current season of a date.

```javascript
import { getCurrentSeason } from "@postlight/seasons";

const currentSeason = getCurrentSeason(new Date());
console.log(currentSeason);
```

## Functions

`getCurrentSeason(date, isNorthernHemisphere?)`

Gets the current season for the date. `isNorthernHemisphere` is an optional argument, and defaults to true. The season is determined on the local timezone, since the UTC date must be converted to a timezone since some solstices and equinoxes are different dates (ex: December 2023).

This function returns "spring", "summer", "winter", or "fall"

`getSeasonStart(monthIndex, year)`

Gets the next upcoming equinox or solstice, which is the start of the astronomical season. This returns the date and time in UTC, and it needs to be converted to the local datetime to get the correct season start date.

Example usage to get the December solstice in 2023 for EST timezone:

```javascript
// Get start of winter in northern hemisphere for EST timezone
seasons.getSeasonStart(11, 2023).toLocaleString("en-US", {
  timeZone: "America/New_York",
});

// Should output: 12/21/2023, 10:28:45 PM
```

```javascript
// Convert date to local
const localStart = new Date(
  utcSeasonStart.getFullYear(),
  utcSeasonStart.getMonth(),
  utcSeasonStart.getDate()
);
```

`getSeasonStartJulianDay(monthIndex, year)`

Returns the upcoming solstice or equinox for a month and year as a Julian Day.

`getDateFromJulianDay(julianDay: number)`

Converts a Julian day into a UTC date.

## Sources

Below are sources that were used to create this astronomical season calculator.

- Astronomical Algorithms by Jean Meeus, 2nd edition

- [US Navy Julian Date Converter](https://aa.usno.navy.mil/calculated/calendardate?ID=AA&jd=2437837.39245&submit=Get+Date)

## License

Licensed under either of the below, at your preference:

- Apache License, Version 2.0 (LICENSE-APACHE or http://www.apache.org/licenses/LICENSE-2.0)
- MIT license (LICENSE-MIT or http://opensource.org/licenses/MIT)

---

🔬 A Labs project from your friends at [Postlight](https://postlight.com). Happy coding!
