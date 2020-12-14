from datetime import datetime, timezone, timedelta

def validate_timestamp_against_resolution(timestamp, resolution):
    """Takes a timestamp and checks that is matches a given resolution."""

    if not resolution: return True
    if resolution == "m": return timestamp % 60 == 0
    if resolution == "H": return timestamp % 3600 == 0
    is_d = timestamp % 86400 == 0
    if resolution == "D": return is_d
    if resolution == "W": return (timestamp - (4 * 86400)) % (86400 * 7) == 0
    if resolution == "M":
        return is_d and datetime.utcfromtimestamp(timestamp).day == 1
    if resolution == "Y":
        dt = datetime.utcfromtimestamp(timestamp)
        return is_d and dt.month == 1 and dt.day == 1


def timestamp_to_resolution(timestamp, resolution):
    """Rolls a timestamp back to the most recent timestamo that matches the
    given resolution."""

    if resolution == "m": return timestamp - (timestamp % 60)
    if resolution == "H": return timestamp - (timestamp % 3600)
    if resolution == "D": return timestamp - (timestamp % 86400)
    dt = datetime.fromtimestamp(timestamp, tz=timezone.utc)
    day = datetime(
        dt.year, 1 if resolution == "Y" else dt.month,
        1 if resolution in "MY" else dt.day, 0, 0, tzinfo=timezone.utc
    )
    if resolution == "W": day -= timedelta(days=day.weekday())
    return datetime.timestamp(day)


def combine_datapoint_values(values, series_type):
    """Combines the values of multiple datapoints into a single value."""

    if series_type == 2: return values[0]
    if series_type == 3: return len(values)
    if series_type == 4: return sum(values)
    return sum(values) / len(values)