import json
from unittest import TestCase
from python.series import *

with open("tests/test-data.json") as f:
    test_data = json.load(f)

class TimestampValidationTests(TestCase):

    def test_timestamps_with_no_resolution(self):
        for test_case in test_data["validateTimestampAgainstResolution"]["noResolution"]:
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