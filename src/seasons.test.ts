import seasons from "./seasons";

test("getSeasonStart - March equinox", () => {
  // > 1000 years
  const resultOver1000 = seasons.getSeasonStart(2, 1700);
  const expectedOver1000 = new Date(Date.UTC(1700, 2, 20, 14, 26, 58, 800));

  expect(resultOver1000).toMatchObject(expectedOver1000);

  // < 1000 years
  const resultUnder1000 = seasons.getSeasonStart(2, 100);
  const expectedUnder1000 = new Date(Date.UTC(100, 2, 22, 0, 12, 51, 600));

  expect(resultUnder1000).toMatchObject(expectedUnder1000);
});

test("getSeasonStart - June solstice", () => {
  // > 1000 years
  const resultOver1000 = seasons.getSeasonStart(5, 1962);
  const expectedOver1000 = new Date(Date.UTC(1962, 5, 21, 21, 25, 7, 700));

  expect(resultOver1000).toMatchObject(expectedOver1000);

  // < 1000 years
  const resultUnder1000 = seasons.getSeasonStart(5, 236);
  const expectedUnder1000 = new Date(Date.UTC(236, 5, 22, 19, 18, 32, 300));

  expect(resultUnder1000).toMatchObject(expectedUnder1000);
});

test("getSeasonStart - September equinox", () => {
  // > 1000 years
  const resultOver1000 = seasons.getSeasonStart(8, 2023);
  const expectedOver1000 = new Date(Date.UTC(2023, 8, 23, 6, 51, 15, 800));

  expect(resultOver1000).toMatchObject(expectedOver1000);

  // < 1000 years
  const resultUnder1000 = seasons.getSeasonStart(8, 221);
  const expectedUnder1000 = new Date(Date.UTC(221, 8, 23, 18, 56, 19, 100));

  expect(resultUnder1000).toMatchObject(expectedUnder1000);
});

test("getSeasonStart - December solstice", () => {
  // > 1000 years
  const resultOver1000 = seasons.getSeasonStart(11, 2023);
  const expectedOver1000 = new Date(Date.UTC(2023, 11, 22, 3, 28, 45, 400));

  expect(resultOver1000).toMatchObject(expectedOver1000);

  // < 1000 years
  const resultUnder1000 = seasons.getSeasonStart(11, 990);
  const expectedUnder1000 = new Date(Date.UTC(990, 11, 16, 8, 5, 4, 700));

  expect(resultUnder1000).toMatchObject(expectedUnder1000);
});

test("getSeasonStart - round to next nearest month", () => {
  // Verify starting months that don't have a solstice/equinox
  const marchEquinox = new Date(Date.UTC(2023, 2, 20, 21, 25, 53, 500));
  const juneSolstice = new Date(Date.UTC(2023, 5, 21, 14, 58, 50, 0));
  const septemberEquinox = new Date(Date.UTC(2023, 8, 23, 6, 51, 15, 800));
  const decemberSolstice = new Date(Date.UTC(2023, 11, 22, 3, 28, 45, 400));

  expect(seasons.getSeasonStart(0, 2023)).toMatchObject(marchEquinox);
  expect(seasons.getSeasonStart(1, 2023)).toMatchObject(marchEquinox);

  expect(seasons.getSeasonStart(3, 2023)).toMatchObject(juneSolstice);
  expect(seasons.getSeasonStart(4, 2023)).toMatchObject(juneSolstice);

  expect(seasons.getSeasonStart(6, 2023)).toMatchObject(septemberEquinox);
  expect(seasons.getSeasonStart(7, 2023)).toMatchObject(septemberEquinox);

  expect(seasons.getSeasonStart(9, 2023)).toMatchObject(decemberSolstice);
  expect(seasons.getSeasonStart(10, 2023)).toMatchObject(decemberSolstice);
});

test("getCurrentSeason - March equinox", () => {
  // Northern hemisphere
  expect(seasons.getCurrentSeason(new Date(2023, 2, 10))).toBe("winter");
  expect(seasons.getCurrentSeason(new Date(2023, 2, 19))).toBe("winter");
  expect(seasons.getCurrentSeason(new Date(2023, 2, 20))).toBe("spring");
  expect(seasons.getCurrentSeason(new Date(2023, 2, 27))).toBe("spring");

  // Southern hemisphere
  expect(seasons.getCurrentSeason(new Date(2023, 2, 10), false)).toBe("summer");
  expect(seasons.getCurrentSeason(new Date(2023, 2, 19), false)).toBe("summer");
  expect(seasons.getCurrentSeason(new Date(2023, 2, 20), false)).toBe("fall");
  expect(seasons.getCurrentSeason(new Date(2023, 2, 27), false)).toBe("fall");
});

test("getCurrentSeason - June solstice", () => {
  // Northern hemisphere
  expect(seasons.getCurrentSeason(new Date(2023, 5, 10))).toBe("spring");
  expect(seasons.getCurrentSeason(new Date(2023, 5, 20))).toBe("spring");
  expect(seasons.getCurrentSeason(new Date(2023, 5, 21))).toBe("summer");
  expect(seasons.getCurrentSeason(new Date(2023, 5, 27))).toBe("summer");

  // Southern hemisphere
  expect(seasons.getCurrentSeason(new Date(2023, 5, 10), false)).toBe("fall");
  expect(seasons.getCurrentSeason(new Date(2023, 5, 20), false)).toBe("fall");
  expect(seasons.getCurrentSeason(new Date(2023, 5, 21), false)).toBe("winter");
  expect(seasons.getCurrentSeason(new Date(2023, 5, 27), false)).toBe("winter");
});

test("getCurrentSeason - September equinox", () => {
  // Northern hemisphere
  expect(seasons.getCurrentSeason(new Date(2023, 8, 10))).toBe("summer");
  expect(seasons.getCurrentSeason(new Date(2023, 8, 22))).toBe("summer");
  expect(seasons.getCurrentSeason(new Date(2023, 8, 23))).toBe("fall");
  expect(seasons.getCurrentSeason(new Date(2023, 8, 27))).toBe("fall");

  // Southern hemisphere
  expect(seasons.getCurrentSeason(new Date(2023, 8, 10), false)).toBe("winter");
  expect(seasons.getCurrentSeason(new Date(2023, 8, 22), false)).toBe("winter");
  expect(seasons.getCurrentSeason(new Date(2023, 8, 23), false)).toBe("spring");
  expect(seasons.getCurrentSeason(new Date(2023, 8, 27), false)).toBe("spring");
});

test("getCurrentSeason - December solstice", () => {
  // Northern hemisphere
  expect(seasons.getCurrentSeason(new Date(2023, 11, 10))).toBe("fall");
  expect(seasons.getCurrentSeason(new Date(2023, 11, 20))).toBe("fall");
  expect(seasons.getCurrentSeason(new Date(2023, 11, 21))).toBe("winter");
  expect(seasons.getCurrentSeason(new Date(2023, 11, 30))).toBe("winter");

  // Southern hemisphere
  expect(seasons.getCurrentSeason(new Date(2023, 11, 10), false)).toBe(
    "spring"
  );
  expect(seasons.getCurrentSeason(new Date(2023, 11, 20), false)).toBe(
    "spring"
  );
  expect(seasons.getCurrentSeason(new Date(2023, 11, 21), false)).toBe(
    "summer"
  );
  expect(seasons.getCurrentSeason(new Date(2023, 11, 30), false)).toBe(
    "summer"
  );
});

test("getCurrentSeason - other months", () => {
  // Northern hemisphere
  expect(seasons.getCurrentSeason(new Date(2023, 0, 10))).toBe("winter");
  expect(seasons.getCurrentSeason(new Date(2023, 1, 19))).toBe("winter");
  expect(seasons.getCurrentSeason(new Date(2023, 3, 20))).toBe("spring");
  expect(seasons.getCurrentSeason(new Date(2023, 4, 23))).toBe("spring");
  expect(seasons.getCurrentSeason(new Date(2023, 6, 11))).toBe("summer");
  expect(seasons.getCurrentSeason(new Date(2023, 7, 28))).toBe("summer");
  expect(seasons.getCurrentSeason(new Date(2023, 9, 1))).toBe("fall");
  expect(seasons.getCurrentSeason(new Date(2023, 10, 2))).toBe("fall");

  // Southern hemisphere
  expect(seasons.getCurrentSeason(new Date(2023, 0, 10), false)).toBe("summer");
  expect(seasons.getCurrentSeason(new Date(2023, 1, 19), false)).toBe("summer");
  expect(seasons.getCurrentSeason(new Date(2023, 3, 20), false)).toBe("fall");
  expect(seasons.getCurrentSeason(new Date(2023, 4, 23), false)).toBe("fall");
  expect(seasons.getCurrentSeason(new Date(2023, 6, 11), false)).toBe("winter");
  expect(seasons.getCurrentSeason(new Date(2023, 7, 28), false)).toBe("winter");
  expect(seasons.getCurrentSeason(new Date(2023, 9, 1), false)).toBe("spring");
  expect(seasons.getCurrentSeason(new Date(2023, 10, 2), false)).toBe("spring");
});

test("getSeasons in 2023", () => {
  const expectedSeasons2023 = [
    new Date(Date.UTC(2023, 2, 20, 21, 25, 53, 500)),
    new Date(Date.UTC(2023, 5, 21, 14, 58, 50, 0)),
    new Date(Date.UTC(2023, 8, 23, 6, 51, 15, 800)),
    new Date(Date.UTC(2023, 11, 22, 3, 28, 45, 400)),
  ];

  expect(seasons.getSeasons(2023)).toMatchObject(expectedSeasons2023);
});
