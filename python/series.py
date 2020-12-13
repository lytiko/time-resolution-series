from datetime import datetime

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