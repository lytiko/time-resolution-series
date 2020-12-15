import json
from unittest import TestCase
from python.series import *

with open("tests/test-data.json") as f:
    test_data = json.load(f)

class TimestampValidationTests(TestCase):

    def test_timestamps_with_S_resolution(self):
        for test_case in test_data["validateTimestampAgainstResolution"]["S"]:
            ts, res = test_case["input"]
            self.assertEqual(validate_timestamp_against_resolution(ts, res), test_case["output"])
    

    def test_timestamps_with_m_resolution(self):
        for test_case in test_data["validateTimestampAgainstResolution"]["m"]:
            ts, res = test_case["input"]
            self.assertEqual(validate_timestamp_against_resolution(ts, res), test_case["output"])
    

    def test_timestamps_with_H_resolution(self):
        for test_case in test_data["validateTimestampAgainstResolution"]["H"]:
            ts, res = test_case["input"]
            self.assertEqual(validate_timestamp_against_resolution(ts, res), test_case["output"])


    def test_timestamps_with_D_resolution(self):
        for test_case in test_data["validateTimestampAgainstResolution"]["D"]:
            ts, res = test_case["input"]
            self.assertEqual(validate_timestamp_against_resolution(ts, res), test_case["output"])
    

    def test_timestamps_with_W_resolution(self):
        for test_case in test_data["validateTimestampAgainstResolution"]["W"]:
            ts, res = test_case["input"]
            self.assertEqual(validate_timestamp_against_resolution(ts, res), test_case["output"])


    def test_timestamps_with_M_resolution(self):
        for test_case in test_data["validateTimestampAgainstResolution"]["M"]:
            ts, res = test_case["input"]
            self.assertEqual(validate_timestamp_against_resolution(ts, res), test_case["output"])
    

    def test_timestamps_with_Y_resolution(self):
        for test_case in test_data["validateTimestampAgainstResolution"]["Y"]:
            ts, res = test_case["input"]
            self.assertEqual(validate_timestamp_against_resolution(ts, res), test_case["output"])



class TimestampToResolutionTests(TestCase):

    def test_can_convert_timestamps_to_second_resolution(self):
        for test_case in test_data["timestampToResolution"]["S"]:
            ts, res = test_case["input"]
            self.assertEqual(timestamp_to_resolution(ts, res), test_case["output"])


    def test_can_convert_timestamps_to_minute_resolution(self):
        for test_case in test_data["timestampToResolution"]["m"]:
            ts, res = test_case["input"]
            self.assertEqual(timestamp_to_resolution(ts, res), test_case["output"])


    def test_can_convert_timestamps_to_hour_resolution(self):
        for test_case in test_data["timestampToResolution"]["H"]:
            ts, res = test_case["input"]
            self.assertEqual(timestamp_to_resolution(ts, res), test_case["output"])
    

    def test_can_convert_timestamps_to_day_resolution(self):
        for test_case in test_data["timestampToResolution"]["D"]:
            ts, res = test_case["input"]
            self.assertEqual(timestamp_to_resolution(ts, res), test_case["output"])
    

    def test_can_convert_timestamps_to_week_resolution(self):
        for test_case in test_data["timestampToResolution"]["W"]:
            ts, res = test_case["input"]
            self.assertEqual(timestamp_to_resolution(ts, res), test_case["output"])
    

    def test_can_convert_timestamps_to_month_resolution(self):
        for test_case in test_data["timestampToResolution"]["M"]:
            ts, res = test_case["input"]
            self.assertEqual(timestamp_to_resolution(ts, res), test_case["output"])
    

    def test_can_convert_timestamps_to_year_resolution(self):
        for test_case in test_data["timestampToResolution"]["Y"]:
            ts, res = test_case["input"]
            self.assertEqual(timestamp_to_resolution(ts, res), test_case["output"])



class DatapointValueCombinaitonTests(TestCase):

    def test_can_combine_type_1_values(self):
        for test_case in test_data["combineDatapointValues"]["type1"]:
            values, type_ = test_case["input"]
            self.assertEqual(combine_datapoint_values(values, type_), test_case["output"])
    

    def test_can_combine_type_2_values(self):
        for test_case in test_data["combineDatapointValues"]["type2"]:
            values, type_ = test_case["input"]
            self.assertEqual(combine_datapoint_values(values, type_), test_case["output"])


    def test_can_combine_type_3_values(self):
        for test_case in test_data["combineDatapointValues"]["type3"]:
            values, type_ = test_case["input"]
            self.assertEqual(combine_datapoint_values(values, type_), test_case["output"])
    

    def test_can_combine_type_4_values(self):
        for test_case in test_data["combineDatapointValues"]["type4"]:
            values, type_ = test_case["input"]
            self.assertEqual(combine_datapoint_values(values, type_), test_case["output"])
    

    def test_can_combine_type_5_values(self):
        for test_case in test_data["combineDatapointValues"]["type5"]:
            values, type_ = test_case["input"]
            self.assertEqual(combine_datapoint_values(values, type_), test_case["output"])



class SeriesValidationTests(TestCase):

    def test_keys_must_be_in_place(self):
        for series in test_data["validateSeries"]["keys"]["valid"]:
            self.assertTrue(validate_series(series))
        for series in test_data["validateSeries"]["keys"]["invalid"]:
            self.assertFalse(validate_series(series))
    

    def test_name_validation(self):
        for series in test_data["validateSeries"]["name"]["valid"]:
            self.assertTrue(validate_series(series))
        for series in test_data["validateSeries"]["name"]["invalid"]:
            self.assertFalse(validate_series(series))
    

    def test_type_validation(self):
        for series in test_data["validateSeries"]["type"]["valid"]:
            self.assertTrue(validate_series(series))
        for series in test_data["validateSeries"]["type"]["invalid"]:
            self.assertFalse(validate_series(series))
    

    def test_resolution_validation(self):
        for series in test_data["validateSeries"]["resolution"]["valid"]:
            self.assertTrue(validate_series(series))
        for series in test_data["validateSeries"]["resolution"]["invalid"]:
            self.assertFalse(validate_series(series))
    
    
    def test_composite_validation(self):
        for series in test_data["validateSeries"]["composite"]["valid"]:
            self.assertTrue(validate_series(series))
        for series in test_data["validateSeries"]["composite"]["invalid"]:
            self.assertFalse(validate_series(series))

    
    def test_datapoints_validation(self):
        for series in test_data["validateSeries"]["datapoints"]["valid"]:
            self.assertTrue(validate_series(series))
        for series in test_data["validateSeries"]["datapoints"]["invalid"]:
            self.assertFalse(validate_series(series))
    



class DatapointValidationTests(TestCase):

    def test_timezone_validation(self):
        for series, datapoint in test_data["validateDatapoint"]["timezone"]["valid"]:
            self.assertTrue(validate_datapoint(series, datapoint))
        for series, datapoint in test_data["validateDatapoint"]["timezone"]["invalid"]:
            self.assertFalse(validate_datapoint(series, datapoint))

        
    def test_timestamp_validation(self):
        for series, datapoint in test_data["validateDatapoint"]["timestamp"]["valid"]:
            self.assertTrue(validate_datapoint(series, datapoint))
        for series, datapoint in test_data["validateDatapoint"]["timestamp"]["invalid"]:
            self.assertFalse(validate_datapoint(series, datapoint))

        
    def test_composite_validation(self):
        for series, datapoint in test_data["validateDatapoint"]["components"]["valid"]:
            self.assertTrue(validate_datapoint(series, datapoint))
        for series, datapoint in test_data["validateDatapoint"]["components"]["invalid"]:
            self.assertFalse(validate_datapoint(series, datapoint))