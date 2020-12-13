const {validateTimestampAgainstResolution} = require("../js/series");

test("timestamps with no resolution always validate", () => {
  expect(validateTimestampAgainstResolution(0, null)).toBe(true);
  expect(validateTimestampAgainstResolution(-100, null)).toBe(true);
  expect(validateTimestampAgainstResolution(1000, null)).toBe(true);
});

test("timestamps with D resolution validate", () => {
  expect(validateTimestampAgainstResolution(0, "D")).toBe(true);
  expect(validateTimestampAgainstResolution(100, "D")).toBe(false);
  expect(validateTimestampAgainstResolution(86400, "D")).toBe(true);
  expect(validateTimestampAgainstResolution(-86400, "D")).toBe(true);
  expect(validateTimestampAgainstResolution(-80000, "D")).toBe(false);
});

test("timestamps with W resolution validate", () => {
  expect(validateTimestampAgainstResolution(0, "W")).toBe(false);
  expect(validateTimestampAgainstResolution(86400, "W")).toBe(false);
  expect(validateTimestampAgainstResolution(946684800, "W")).toBe(false);
  expect(validateTimestampAgainstResolution(946684801, "W")).toBe(false);
  expect(validateTimestampAgainstResolution(1605484800, "W")).toBe(true);
  expect(validateTimestampAgainstResolution(-259200, "W")).toBe(true);
});

test("timestamps with M resolution validate", () => {
  expect(validateTimestampAgainstResolution(1, "M")).toBe(false);
  expect(validateTimestampAgainstResolution(86400, "M")).toBe(false);
  expect(validateTimestampAgainstResolution(946684800, "M")).toBe(true);
  expect(validateTimestampAgainstResolution(946684801, "M")).toBe(false);
  expect(validateTimestampAgainstResolution(1605484800, "M")).toBe(false);
  expect(validateTimestampAgainstResolution(1201824000, "M")).toBe(true);
});

test("timestamps with Y resolution validate", () => {
  expect(validateTimestampAgainstResolution(1, "Y")).toBe(false);
  expect(validateTimestampAgainstResolution(86400, "Y")).toBe(false);
  expect(validateTimestampAgainstResolution(946684800, "Y")).toBe(true);
  expect(validateTimestampAgainstResolution(946684801, "Y")).toBe(false);
  expect(validateTimestampAgainstResolution(1605484800, "Y")).toBe(false);
  expect(validateTimestampAgainstResolution(1201824000, "Y")).toBe(false);
  expect(validateTimestampAgainstResolution(1199145600, "Y")).toBe(true);
});


