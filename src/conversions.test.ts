import conversion from "./conversions";

// Expected test result is from the US Navy Julian Date Converter
test("Convert Julian day of 1962 June solstice", () => {
  let result = conversion.getDateFromJulianDay(2437837.39245);
  let expected = new Date(Date.UTC(1962, 5, 21, 21, 25, 7, 700));

  expect(result).toMatchObject(expected);
});

// Expected test result is from the US Navy Julian Date Converter
test("Convert Julian day of 2050 date", () => {
  let result = conversion.getDateFromJulianDay(2469832.41434);
  let expected = new Date(Date.UTC(2050, 0, 25, 21, 56, 39, 0));

  expect(result).toMatchObject(expected);
});

// Expected test result matches sample calculation from Astronomical Algorithms, p.64
test("Convert Julian day of 584 BC date", () => {
  let result = conversion.getDateFromJulianDay(1507900.13);
  let expected = new Date(Date.UTC(-584, 4, 28, 15, 7, 12, 0));

  expect(result).toMatchObject(expected);
});

// Expected test result matches sample calculation from Astronomical Algorithms, p.64
test("Convert Julian day of 333 AD date", () => {
  let result = conversion.getDateFromJulianDay(1842713);
  let expected = new Date(Date.UTC(333, 0, 27, 12, 0, 0, 0));

  expect(result).toMatchObject(expected);
});
