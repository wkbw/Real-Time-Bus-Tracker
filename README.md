# Real-Time-Bus-Tracker

###### This README file is a companion to the Real-Time-Bus-Tracker Exercise completed during Week 9 of the Professional Certificate in Coding Cohort. 

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#description">Description</a></li>
    <li><a href="#how-to-run">How to Run</a></li>
    <li><a href="#roadmap-of-future-improvements">Roadmap of Future Improvements</a></li>
     <ul>
        <li><a href="#data-extracts">Data Extracts</a></li>
        <li><a href="#mapbox-gl-js-custom-icons-with-markers">Mapbox GL</a></li>
      </ul>
    <li><a href="#license-information">License Information</a></li>
  </ul>
</details>

## Description
This is a theoretical bus trip taken with my dog to his favorite dog park with an optional mid-trip stop at another dog park. 

## How to Run
* Open the Real Time Bus Tracker by clicking on [index.html](https://wkbw.github.io/Real-Time-Bus-Tracker/).
* Click on each of the three dog images to display relevant information about those chosen bus stops. 
* Click ___OK___ to dismiss the pop-up.
* Click the ___Dog Park Bus Trip Fun!___ button, which is located in the upper-left corner of the map. Watch as the marker moves along the bus route to stopping only at our final  dog park destination, *Wiggly Field Off-Leash Dog Park*.

## Roadmap of Future Improvements
This map could be improved by:
* Stopping the marker's movement at the first dog park and automatically pop-up a message to give a brief description of this dog park. 
* Changing button text to ___Continue Dog Park Bus Trip Fun!___ 
* Resuming the marker's when clicked a second time so that it moves along the bus route until the final dog park destination is reached.
* Triggering a second pop-up message with a brief description of the second dog park. 

## Acknowledgments

### Data Extracts
* Bus route data was extracted from Sound Transit Open Transit Data GTFS files made available via download at the [developer resources](http://www.soundtransit.org/Developer-resources/Data-downloads) section.

* This information was used to identify coordinates to/from local dog parks. 

### Mapbox GL JS Custom Icons with Markers
I added a few Mapbox features based on [this example](https://docs.mapbox.com/mapbox-gl-js/example/custom-marker-icons/). Those features are:
* Three custom icons markers added to map using a GeoJSON to place the custom markers. 
* A popup message appears when a puppy icon is clicked. This message explains why this stop is highlighted on the route.
* The *bus-button* class was added to the stylesheet and the button text changed to explain the map 

## License Information
[This Real-Time-Bus-Tracker project is licensed under the MIT License](https://github.com/wkbw/Real-Time-Bus-Tracker#:~:text=Commit%20time-,LICENSE,-Initial%20commit)


