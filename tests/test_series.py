import os
os.chdir("python")
from unittest import TestCase
from series import *

class TimestampValidationTests(TestCase):

    def test_timestamps_with_no_resolution(self):
        self.assertTrue(validate_timestamp_against_resolution(0, None))
        self.assertTrue(validate_timestamp_against_resolution(-100, None))
        self.assertTrue(validate_timestamp_against_resolution(1000, None))
    

    def test_timestamps_with_D_resolution(self):
        self.assertTrue(validate_timestamp_against_resolution(0, "D"))
        self.assertFalse(validate_timestamp_against_resolution(100, "D"))
        self.assertTrue(validate_timestamp_against_resolution(86400, "D"))
        self.assertTrue(validate_timestamp_against_resolution(-86400, "D"))
        self.assertFalse(validate_timestamp_against_resolution(-80000, "D"))
    

    def test_timestamps_with_W_resolution(self):
        self.assertFalse(validate_timestamp_against_resolution(0, "W"))
        self.assertFalse(validate_timestamp_against_resolution(86400, "W"))
        self.assertFalse(validate_timestamp_against_resolution(946684800, "W"))
        self.assertFalse(validate_timestamp_against_resolution(946684801, "W"))
        self.assertTrue(validate_timestamp_against_resolution(1605484800, "W"))
        self.assertTrue(validate_timestamp_against_resolution(-259200, "W"))


    def test_timestamps_with_M_resolution(self):
        self.assertFalse(validate_timestamp_against_resolution(1, "M"))
        self.assertFalse(validate_timestamp_against_resolution(86400, "M"))
        self.assertTrue(validate_timestamp_against_resolution(946684800, "M"))
        self.assertFalse(validate_timestamp_against_resolution(946684801, "M"))
        self.assertFalse(validate_timestamp_against_resolution(1605484800, "M"))
        self.assertTrue(validate_timestamp_against_resolution(1201824000, "M"))
    

    def test_timestamps_with_Y_resolution(self):
        self.assertFalse(validate_timestamp_against_resolution(1, "Y"))
        self.assertFalse(validate_timestamp_against_resolution(86400, "Y"))
        self.assertTrue(validate_timestamp_against_resolution(946684800, "Y"))
        self.assertFalse(validate_timestamp_against_resolution(946684801, "Y"))
        self.assertFalse(validate_timestamp_against_resolution(1605484800, "Y"))
        self.assertFalse(validate_timestamp_against_resolution(1201824000, "Y"))
        self.assertTrue(validate_timestamp_against_resolution(1199145600, "Y"))