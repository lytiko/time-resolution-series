const {validateTimestampAgainstResolution} = require("../js/series");
const testData = require("./test-data.json");

test("timestamps with no resolution always validate", () => {
  for (let testCase of testData.validateTimestampAgainstResolution.noResolution) {
    const [ts, res] = testCase.input;
    expect(validateTimestampAgainstResolution(ts, res)).toBe(testCase.output);
  }
});

test("timestamps with m resolution validate", () => {
  for (let testCase of testData.validateTimestampAgainstResolution.m) {
    const [ts, res] = testCase.input;
    expect(validateTimestampAgainstResolution(ts, res)).toBe(testCase.output);
  }
});

test("timestamps with H resolution validate", () => {
  for (let testCase of testData.validateTimestampAgainstResolution.H) {
    const [ts, res] = testCase.input;
    expect(validateTimestampAgainstResolution(ts, res)).toBe(testCase.output);
  }
});

test("timestamps with D resolution validate", () => {
  for (let testCase of testData.validateTimestampAgainstResolution.D) {
    const [ts, res] = testCase.input;
    expect(validateTimestampAgainstResolution(ts, res)).toBe(testCase.output);
  }
});

test("timestamps with W resolution validate", () => {
  for (let testCase of testData.validateTimestampAgainstResolution.W) {
    const [ts, res] = testCase.input;
    expect(validateTimestampAgainstResolution(ts, res)).toBe(testCase.output);
  }
});

test("timestamps with M resolution validate", () => {
  for (let testCase of testData.validateTimestampAgainstResolution.M) {
    const [ts, res] = testCase.input;
    expect(validateTimestampAgainstResolution(ts, res)).toBe(testCase.output);
  }
});

test("timestamps with Y resolution validate", () => {
  for (let testCase of testData.validateTimestampAgainstResolution.Y) {
    const [ts, res] = testCase.input;
    expect(validateTimestampAgainstResolution(ts, res)).toBe(testCase.output);
  }
});


