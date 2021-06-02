# Mapping Earthquakes

## Overview of Project
Help Basil and Sadhana for the non-profit company ***”Disaster Reporting Network”*** visually display, with interactive features, the differences between the magnitudes of earthquakes all over the world.

### Purpose:
Using a **URL** for **GeoJSON** earthquake data from the ***USGS*** website and retrieve geographical coordinates and the magnitudes of earthquakes for the last seven days. Then add the data to a map.

## Results:
Writing a script with **JavaScript** and **D3.js** library to retrieve the coordinates and magnitude of the earthquakes from the GeoJSON data, we next used **Leaflet** library to plot the data on a **Mapbox** map through an API request to create an interactive geographical map, see image below for snippet of code. 

![]( https://github.com/Apollo619/Mapping_Earthquakes/blob/main/Earthquake_Challenge/resources/code.PNG)

The map includes…
-	Three (3) tile layers that lets the user change the view of the map layout as well as three (3) additional overlays (see image below)

![]( https://github.com/Apollo619/Mapping_Earthquakes/blob/main/Earthquake_Challenge/resources/layers.png)

## Summary:
When a user runs the HTML with JS program, an interactive map will display (see below image) for all recorded earthquakes for the past seven days. 

![]( https://github.com/Apollo619/Mapping_Earthquakes/blob/main/Earthquake_Challenge/resources/satellite%20view.PNG)

Looking at the map, the user has the ability to toggle between **”Streets”**, **”Satellite”**, and **”Dark”** layouts as well as toggle on or off…
1.	All earthquakes recorded from the ***USGS***.
2.	Tectonics Plates boundaries. 
3.	Display all **major** earthquakes that had magnitudes greater than 4.5 within the last week. 
4.	And lastly, the user can click on any marker to reveal the magnitude and location. (see below image)

![]( https://github.com/Apollo619/Mapping_Earthquakes/blob/main/Earthquake_Challenge/resources/binderPopup.PNG)
