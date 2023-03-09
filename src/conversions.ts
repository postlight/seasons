/*
 * Convert Julian day into Gregorian Calendar UTC time
 *
 * Calculation from Astronomical Algorithms, p.63
 */
function getDateFromJulianDay(julianDay: number) {
  julianDay += 0.5;
  let [sInteger, sFraction] = julianDay.toString().split(".");

  let integer = parseInt(sInteger);
  let fraction = parseFloat("0." + sFraction);

  let a: number, b: number, c: number, d: number, e: number;

  if (integer < 2299161) {
    a = integer;
  } else {
    let gamma = Math.trunc((integer - 1867216.25) / 36524.25);
    a = integer + 1 + gamma - Math.trunc(gamma / 4);
  }

  b = a + 1524;
  c = Math.trunc((b - 122.1) / 365.25);
  d = Math.trunc(365.25 * c);
  e = Math.trunc((b - d) / 30.6001);

  let dayOfMonth = b - d - Math.trunc(30.6001 * e) + fraction;
  let month = e < 14 ? e - 1 : e - 13;

  let hour = (dayOfMonth % 1) * 24;
  let minute = (hour % 1) * 60;
  let [second, millisecond] = (Math.round((minute % 1) * 60 * 10) / 10)
    .toString()
    .split(".");

  // Need to wrap in UTC or converts from UTC to local
  return new Date(
    Date.UTC(
      month > 2 ? c - 4716 : c - 4715,
      month - 1,
      Math.trunc(dayOfMonth),
      Math.trunc(hour),
      Math.trunc(minute),
      parseInt(second),
      parseInt(millisecond) * 100 || 0
    )
  );
}

export default { getDateFromJulianDay };
