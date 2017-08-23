# Happy Planet Index Website

## Overview

### What is this Website for?
 
This website is for users interested in viewing the happiest countrie.This site was made for my stream two prjoect.The site demonstrates the use of csv/json datasets and other tech to display graphs. 
 
### What does it do?
 
It helps users interested in quickly accesing information about countries around the world, without having to read through rows of data.These graphs will allow the user to view a countries happy planet index score, life expectancy and their population.The user can quickly and easily compare two or more countries life expectancy, happy planet index score and display the combined population of the countries being compared .
 
### How does it work
 
This websites data has been stored in **MongoDb**. It then uses **Flask** to retrieve the data from the database and return it to the browser aswell as all the routing in the site. The graphs where created using **D3**, **Crossfilter** and **DC** and the Choropleth chart used Geo.json. The styling of the website is done with **Bootstrap** and my own **CSS**.The Site uses **Github** version controll to keep track of any changes and the final working version has been diployed to **Heroku**

### Changes

I have made changes to my graphs page to suit the look and feel of the website, There was originally meant to be a bar chart but this didnt look good at all and therefore it was changed to a pie chart to keep the site looking great. I also added an additional pie chart to give it that extra edge.The site has also had media changes to keep the site looking good on all devices. 
 
## Features
 
### Implemented Features
    - Layout for all pages (flask)
    - Simple and effective welcome page (index page)
    - informative about page
    - Graphs Page
        -choropleth graph (geo.json)
        -pie chart X2 
        -number display
        - Scaling for choropleth chart(javascript)
    - Mobile responsive features
 
## Tech Used

### Some of the tech used includes:

- [Flask](http://flask.pocoo.org)
    - I used Flask to retrieve the data from the database and return it to the browser

- [MongoDB](https://www.mongodb.com)
    - I used MongoDb to store my .csv data

- [Crossfilter](http://square.github.io/crossfilter/)
    - I used crossfilter for filtering through dataset

- [D3](https://d3js.org)
    - I Used D3 for visualizing the data

- [DC](https://dc-js.github.io/dc.js/)
    - I used DC to create the graphs

- [PyMongo](https://api.mongodb.com/python/current/)
    - I used pymango to allow python to work with MongoDb 

- [Bootstrap](http://getbootstrap.com/)
    - I Used bootstrap for easy and responsive layout throughout the site

## Testing
- All testing has been done throughout the duration of the project using chrome and firefox.The mobile responsive features tested by resizing the browser windows in both chrome and firefox
 
## Contributing
- The dataset comes from The Happy Planet Index.

- w3schools has been a good refrence site to refresh different codes and methods.

- My tutor has been a great help and inspiration for this project.