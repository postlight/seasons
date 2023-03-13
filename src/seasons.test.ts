import seasons from "./seasons";

test("March equinox > 1000 years", () => {
  const result = seasons.getSeasonStart(2, 1700);
  const expected = new Date(Date.UTC(1700, 2, 20, 14, 26, 58, 800));

  expect(result).toMatchObject(expected);
});

test("March equinox < 1000 years", () => {
  const result = seasons.getSeasonStart(2, 100);
  const expected = new Date(Date.UTC(100, 2, 22, 0, 12, 51, 600));

  expect(result).toMatchObject(expected);
});

test("June solstice > 1000 years", () => {
  const result = seasons.getSeasonStart(5, 1962);
  const expected = new Date(Date.UTC(1962, 5, 21, 21, 25, 7, 700));

  expect(result).toMatchObject(expected);
});

test("June solstice < 1000 years", () => {
  const result = seasons.getSeasonStart(5, 236);
  const expected = new Date(Date.UTC(236, 5, 22, 19, 18, 32, 300));

  expect(result).toMatchObject(expected);
});

test("September equinox > 1000 years", () => {
  const result = seasons.getSeasonStart(8, 2023);
  const expected = new Date(Date.UTC(2023, 8, 23, 6, 51, 15, 800));

  expect(result).toMatchObject(expected);
});

test("September equinox <>> 1000 years", () => {
  const result = seasons.getSeasonStart(8, 221);
  const expected = new Date(Date.UTC(221, 8, 23, 18, 56, 19, 100));

  expect(result).toMatchObject(expected);
});

test("December solstice > 1000 years", () => {
  const result = seasons.getSeasonStart(11, 2050);
  const expected = new Date(Date.UTC(2050, 11, 21, 16, 39, 52, 700));

  expect(result).toMatchObject(expected);
});

test("December solstice < 1000 years", () => {
  const result = seasons.getSeasonStart(11, 990);
  const expected = new Date(Date.UTC(990, 11, 16, 8, 5, 4, 700));

  expect(result).toMatchObject(expected);
});
