const moment = require("moment-timezone");

const validateTimestampAgainstResolution = (timestamp, resolution) => {
  /**
   * Takes a timestamp and checks that is matches a given resolution.
   */

  if (!resolution) return true;
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


exports.validateTimestampAgainstResolution = validateTimestampAgainstResolution;
exports.timestampToResolution = timestampToResolution;