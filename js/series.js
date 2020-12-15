const moment = require("moment-timezone");

const validateTimestampAgainstResolution = (timestamp, resolution) => {
  /**
   * Takes a timestamp and checks that is matches a given resolution.
   */

  if (resolution === "S") return true;
  if (resolution === "m") return timestamp % 60 === 0;
  if (resolution === "H") return timestamp % 3600 === 0;
  const isDay = timestamp % 86400 === 0;
  if (resolution === "D") return isDay;
  if (resolution === "W") return (timestamp - (4 * 86400)) % (86400 * 7) === 0;
  if (resolution === "M") {
    return isDay && moment(timestamp * 1000).utc().date() === 1;
  }
  if (resolution === "Y") {
    const dt = moment(timestamp * 1000).utc();
    return isDay && dt.month() === 0 && dt.date() === 1;
  }
}


const timestampToResolution = (timestamp, resolution) => {
  /**
   * Rolls a timestamp back to the most recent timestamo that matches the
   * given resolution.
   */

  const dt = moment(timestamp * 1000).utc();
  const momentStr = {
    Y: "year", M: "month", W: "isoWeek", D: "day", H: "hour", m: "minute"
  }[resolution];
  return dt.startOf(momentStr).valueOf() / 1000;
}


const combineDatapointValues = (values, seriesType) => {
  /**
   * Combines the values of multiple datapoints into a single value.
   */

  if (seriesType === 2) return values[0];
  if (seriesType === 3) return values.length;
  if (seriesType === 4) return values.reduce((prev, curr) => prev + curr, 0);
  return values.reduce((prev, curr) => prev + curr, 0) / values.length;
}


const validateSeries = series => {
  /**
   * Checks that a series object is valid and returns true if it is.
   */

  if ([
    "name", "description", "units", "type", "resolution",
    "composite", "datapoints"
  ].filter(key => series[key] === undefined).length) return false;
  if (!series.name) return false;
  if (!([1, 2, 3, 4, 5].includes(series.type))) return false;
  if (!("SmHDWMY".includes(series.resolution))) return false;
  const rank = "SmHDWMY".split("").concat([null]);
  if (!(rank.includes(series.composite))) return false;
  if (series.composite) {
    if (rank.indexOf(series.resolution) <= rank.indexOf(series.composite)) {
      return false;
    }
  }
  if (!Array.isArray(series.datapoints)) return false;  
  return true;
}


const validateDatapoint = (datapoint, series) => {
  /**
   * Checks that a datapoint object is valid for a given series and returns
   * true if it is.
   */

  if (!validateTimestampAgainstResolution(
    datapoint.timestamp, series.resolution
  )) return false;
  if ("SmH".includes(series.resolution) && !datapoint.timezone) return false;
  if ("DWMY".includes(series.resolution) && datapoint.timezone) return false;
  if (series.composite) {
    if (datapoint.components.length === 0) return false;
    for (let component of datapoint.components) {
      if (!validateTimestampAgainstResolution(
        component.timestamp, series.composite
      )) return false;
      if ("SmH".includes(series.composite) && !component.timezone) return false;
      if ("DWMY".includes(series.composite) && component.timezone) return false;
    }
  } else if (datapoint.components.length) return false;
  return true;
}



exports.validateTimestampAgainstResolution = validateTimestampAgainstResolution;
exports.timestampToResolution = timestampToResolution;
exports.combineDatapointValues = combineDatapointValues;
exports.validateSeries = validateSeries;
exports.validateDatapoint = validateDatapoint;