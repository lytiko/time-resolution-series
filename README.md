# Time Resolution Series

A library for managing time series at different time resolutions, implemented in
Python and Javascript.

## Series

A series is a JSON object that represents how some quantity changes over time.

## Functions

`validate_timestamp_against_resolution(time, resolution)` - checks that a timestamp matches some resolution.

`timestamp_to_resolution(time, resolution)` - rolls a timestamp back to the earliest matching timestamp for a resolution.

`combine_datapoint_values(datapoints, series_type)` - combines the values of multiple values into a single one, based on the relevant series type.

`validate_series(series)` - checks that a series object is valid.

`change_series_resolution(series, resolution)` - changes the resolution of a series, saving data where possible.

`calculate_series_trendline(series)` - calculates a trendline series from a series.

`add_missing_datapoints(series)` - interpolates missing datapoints based on rules determined by series type.