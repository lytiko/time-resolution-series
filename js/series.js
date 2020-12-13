const moment = require("moment-timezone");

const validateTimestampAgainstResolution = (timestamp, resolution) => {
  if (!resolution) return true;
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

exports.validateTimestampAgainstResolution = validateTimestampAgainstResolution;