# Happy Planet Index Website

## Overview

### What is this app for?
 
This website was made for my stream two prjoect.The site demonstrates the use of csv/json datasets and other tech to display graphs. 
 
### What does it do?
 
It helps users interested in quickly accesing information about countries around the world, without having to read through rows of data.These graphs will allow the user to view a countries happy planet index score, life expectancy and their population.The user can quickly and easily compare two or more countries life expectancy, happy planet index score and display the combined population of the countries being compared .
 
### How does it work
 
This websites data has been stored in ##MongoDb##. It then uses ##Flask## for all the routing of the site.The graphs where created using ##D3##, ##Crossfilter## and ##DC## and the Choropleth chart used Geo.json. The styling of the website is done with ##Bootstrap## and my own ##CSS##.
 
## Features
 
### Implemented Features
    - Layout for all pages
    - Simple and effective welcome page (index page)
    - informative about page
    - Graphs Page
        -choropleth graph (geo.json)
        -pie chart X2
        -number display
        - Scaling for choropleth chart(javascript)
    - Mobile responsive features

### Features Left to Implement 

 
## Tech Used

### Some of the tech used includes:

- [Flask](http://flask.pocoo.org)
    - I used Flask for the routing of the site

- [MongoDB](https://www.mongodb.com)
    - I used MongoDb to store my .csv data

- [Crossfilter](http://square.github.io/crossfilter/)
    - I used crossfilter for filtering through dataset

- [D3](https://d3js.org)
    - I Used D3 for visualizing the data

- [DC](https://dc-js.github.io/dc.js/)
    - I used D3 to create the graphs

- [PyMongo](https://api.mongodb.com/python/current/)
    - I used pymango to allow python to work with MongoDb 

- [Bootstrap](http://getbootstrap.com/)
    - I Used bootstrap for easy and responsive layout throughout the site

 
## Contributing
  - The dataset comes from The Happy Planet Index
  - w3schools has been a good refrence site to refresh different codes and methods.
  - My tutor has been a great help and inspiration for this project.