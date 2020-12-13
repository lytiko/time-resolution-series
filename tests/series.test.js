const {
  validateTimestampAgainstResolution,
  timestampToResolution
} = require("../js/series");
const testData = require("./test-data.json");

// validateTimestampAgainstResolution
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



// timestampToResolution
test("converting timestamps to m resolution", () => {
  for (let testCase of testData.timestampToResolution.m) {
    const [ts, res] = testCase.input;
    expect(timestampToResolution(ts, res)).toBe(testCase.output);
  }
});

test("converting timestamps to H resolution", () => {
  for (let testCase of testData.timestampToResolution.H) {
    const [ts, res] = testCase.input;
    expect(timestampToResolution(ts, res)).toBe(testCase.output);
  }
});

test("converting timestamps to D resolution", () => {
  for (let testCase of testData.timestampToResolution.D) {
    const [ts, res] = testCase.input;
    expect(timestampToResolution(ts, res)).toBe(testCase.output);
  }
});

test("converting timestamps to W resolution", () => {
  for (let testCase of testData.timestampToResolution.W) {
    const [ts, res] = testCase.input;
    expect(timestampToResolution(ts, res)).toBe(testCase.output);
  }
});

test("converting timestamps to M resolution", () => {
  for (let testCase of testData.timestampToResolution.M) {
    const [ts, res] = testCase.input;
    expect(timestampToResolution(ts, res)).toBe(testCase.output);
  }
});

test("converting timestamps to Y resolution", () => {
  for (let testCase of testData.timestampToResolution.Y) {
    const [ts, res] = testCase.input;
    expect(timestampToResolution(ts, res)).toBe(testCase.output);
  }
});


