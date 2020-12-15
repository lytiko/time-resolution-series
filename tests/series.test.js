const {
  validateTimestampAgainstResolution,
  timestampToResolution,
  combineDatapointValues,
  validateSeries,
  validateDatapoint
} = require("../js/series");
const testData = require("./test-data.json");

// validateTimestampAgainstResolution
test("timestamps with S resolution always validate", () => {
  for (let testCase of testData.validateTimestampAgainstResolution.S) {
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
test("converting timestamps to S resolution", () => {
  for (let testCase of testData.timestampToResolution.S) {
    const [ts, res] = testCase.input;
    expect(timestampToResolution(ts, res)).toBe(testCase.output);
  }
});

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



// combineDatapointValues
test("combining series 1 values", () => {
  for (let testCase of testData.combineDatapointValues.type1) {
    const [values, type] = testCase.input;
    expect(combineDatapointValues(values, type)).toBe(testCase.output);
  }
});

test("combining series 2 values", () => {
  for (let testCase of testData.combineDatapointValues.type2) {
    const [values, type] = testCase.input;
    expect(combineDatapointValues(values, type)).toBe(testCase.output);
  }
});

test("combining series 3 values", () => {
  for (let testCase of testData.combineDatapointValues.type3) {
    const [values, type] = testCase.input;
    expect(combineDatapointValues(values, type)).toBe(testCase.output);
  }
});

test("combining series 4 values", () => {
  for (let testCase of testData.combineDatapointValues.type4) {
    const [values, type] = testCase.input;
    expect(combineDatapointValues(values, type)).toBe(testCase.output);
  }
});

test("combining series 5 values", () => {
  for (let testCase of testData.combineDatapointValues.type5) {
    const [values, type] = testCase.input;
    expect(combineDatapointValues(values, type)).toBe(testCase.output);
  }
});



// validateSeries
test("keys in place", () => {
  for (let series of testData.validateSeries.keys.valid) {
    expect(validateSeries(series)).toBe(true); 
  }
  for (let series of testData.validateSeries.keys.invalid) {
    expect(validateSeries(series)).toBe(false); 
  }
});

test("name validates", () => {
  for (let series of testData.validateSeries.name.valid) {
    expect(validateSeries(series)).toBe(true); 
  }
  for (let series of testData.validateSeries.name.invalid) {
    expect(validateSeries(series)).toBe(false); 
  }
});

test("type validates", () => {
  for (let series of testData.validateSeries.type.valid) {
    expect(validateSeries(series)).toBe(true); 
  }
  for (let series of testData.validateSeries.type.invalid) {
    expect(validateSeries(series)).toBe(false); 
  }
});

test("resolution validates", () => {
  for (let series of testData.validateSeries.resolution.valid) {
    expect(validateSeries(series)).toBe(true); 
  }
  for (let series of testData.validateSeries.resolution.invalid) {
    expect(validateSeries(series)).toBe(false); 
  }
});

test("composite validates", () => {
  for (let series of testData.validateSeries.composite.valid) {
    expect(validateSeries(series)).toBe(true); 
  }
  for (let series of testData.validateSeries.composite.invalid) {
    expect(validateSeries(series)).toBe(false); 
  }
});

test("datapoints validates", () => {
  for (let series of testData.validateSeries.datapoints.valid) {
    expect(validateSeries(series)).toBe(true); 
  }
  for (let series of testData.validateSeries.datapoints.invalid) {
    expect(validateSeries(series)).toBe(false); 
  }
});



// validateDatapoint
test("timezone validates", () => {
  for (let [datapoint, series] of testData.validateDatapoint.timezone.valid) {
    expect(validateDatapoint(datapoint, series)).toBe(true); 
  }
  for (let [datapoint, series] of testData.validateDatapoint.timezone.invalid) {
    expect(validateDatapoint(datapoint, series)).toBe(false); 
  }
});

test("timestamp validates", () => {
  for (let [datapoint, series] of testData.validateDatapoint.timestamp.valid) {
    expect(validateDatapoint(datapoint, series)).toBe(true); 
  }
  for (let [datapoint, series] of testData.validateDatapoint.timestamp.invalid) {
    expect(validateDatapoint(datapoint, series)).toBe(false); 
  }
});

test("components validates", () => {
  for (let [datapoint, series] of testData.validateDatapoint.components.valid) {
    expect(validateDatapoint(datapoint, series)).toBe(true); 
  }
  for (let [datapoint, series] of testData.validateDatapoint.components.invalid) {
    expect(validateDatapoint(datapoint, series)).toBe(false); 
  }
});