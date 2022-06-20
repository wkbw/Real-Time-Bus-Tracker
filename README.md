# Real-Time-Bus-Tracker

###### This README file is a companion to the Real-Time-Bus-Tracker Exercise completed during Week 9 of the Professional Certificate in Coding Cohort. 
## Contents
(How to Run)

## About This Project
This is a theoretical bus trip taken with my dog to his favorite dog park with an optional mid-trip stop at another dog park. 

### Data Extracts
* Bus route data was extracted from Sound Transit Open Transit Data GTFS files made available via download at the [developer resources](http://www.soundtransit.org/Developer-resources/Data-downloads) section.

* This information was used to identify coordinates to/from local dog parks. 

### Mapbox GL JS Custom Icons with Markers
I added a few Mapbox features based on [this example](https://docs.mapbox.com/mapbox-gl-js/example/custom-marker-icons/). Those features are:
* Three custom icons markers added to map using a GeoJSON to place the custom markers. 
* A popup message appears when a puppy icon is clicked. This message explains why this stop is highlighted on the route.
* The *bus-button* class was added to the stylesheet and the button text changed to explain the map 

## [How to Run]
To run, click the Dog Park Bus Trip Fun! button on the map. The marker will start moving along the bus route to the dog parks.

## Improvements to Enhance Features/Functionality
This map could be improved by:
* Stopping the marker's movement at the first dog park and automatically pop-up a message to give a brief description of this dog park. 
* Changing button text to *Continue Dog Park Bus Trip Fun!* 
* Resuming the marker's when clicked a second time so that it moves along the bus route until the final dog park destination is reached.
* Triggering a second pop-up message with a brief description of the second dog park. 

## License Information
[This Real-Time-Bus-Tracker project is licensed under the MIT License](https://github.com/wkbw/Real-Time-Bus-Tracker#:~:text=Commit%20time-,LICENSE,-Initial%20commit)
