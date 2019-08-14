# MVP_SOLO Project: LIFTOFF

![Liftoff](./src/icons/rocket-success.png)

Liftoff is an MVP app I wrote while a student @ Code Chrysalis.

It interfaces with `Space Launch Now public API` to retrieve info about the major space agencies and displays their latest missions on a map, while also dispaying detailed infos about them and some relevant stats.

## Technologies used

![React-Redux](https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/square_256/react.png)
![](https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/386/square_256/redux.png)

![MapBox](https://www.mapbox.com/help/demos/custom-markers-gl-js/mapbox-icon.png)

![Chart-js](https://www.chartjs.org/img/chartjs-logo.svg)

## Installation

1. Clone the repository

2. run `yarn`

3. run `yarn start`

4. open up browser to `localhost:3000`

## How to use it

Select an agency from the dropdown list. This will make a call to the API for that specific agency. Once the call has resolved, liftoff will populate the map, showing all locations of rocket launches for that specific agency.

Along with the population of the map, below it detailed info of the most recent missions will appear.
Feel free to use the radio buttons to filter the results!

By clicking the `show stats` button instead, the statistics page will appear and shows some interesting stats that I personally calculated using the data extracted from the API.

## Future features

- clickable markers, showing specific results for that specific location;
- adding a search bar instead of a dropdown menu;
- comparing stats between agencies.

### Final comment

Thank you for downloading my app and give it a try!
Feel free to contact me if you have any question or suggestion. I will be happy to be in touch!

steppashr@gmail.com

Stefano Demichelis
