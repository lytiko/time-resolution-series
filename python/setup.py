from setuptools import setup

with open("README.md") as f:
    long_description = f.read()

setup(
    name="time-resolution-series",
    version="0.1.0",
    description="A library for managing time series at different time resolutions.",
    long_description=long_description,
    long_description_content_type="text/text-md",
    url="https://github.com/lytiko/time-resolution-series",
    author="Sam Ireland",
    author_email="sam@lytiko.com",
    license="MIT",
    classifiers=[
        "Development Status :: 4 - Beta",
        "Intended Audience :: Science/Research",
        "License :: OSI Approved :: MIT License",
        "Topic :: Scientific/Engineering :: Information Analysis",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
    ],
    keywords="time-series",
    py_modules=["series"]
    python_requires="!=2.*, !=3.0.*, !=3.1.*, !=3.2.*, !=3.3.*, !=3.4.*, !=3.5.*",
    install_requires=["pytz"]
)
