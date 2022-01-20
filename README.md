# Spacestagram
- [Tanya Zhuge](https://github.com/tanyazhuge)

- [Heroku](https://spacestagram-red-planet.herokuapp.com)
## Table of Contents
- [Abstract](#Abstract)
- [Technologies](#Technologies)
- [Illustrations](#Illustrations)
- [Install](#Install)
- [API](#API)
- [Wins](#Wins)
- [Challenges](#Challenges)

## Abstract
Spacestagram was designed to show users various images of Mars captured by the Curosity rover. The date of the image as well as the rover and camera names are displayed alongside the image. User can also click the like button on the image. The button will turn pink to signify to user that it's liked and pale yellow if not liked. 

## Technologies
-  HTML
-  CSS/SCSS
-  JavaScript
-  React
-  Fetch API
-  Heroku

## Illustrations
<img width="866" alt="Screen Shot 2022-01-19 at 19 03 21" src="https://user-images.githubusercontent.com/87670195/150264811-7818fd01-bc6f-45ab-b07e-417c6b06693b.png">

## Install
If you want to run locally...
-  Clone this [repo](https://github.com/tanyazhuge/Spacestagram) to your machine
-  `cd` into the directory `Spacestagram` in the terminal
-  Run `npm start` in the terminal
-  In the browser go to `http://localhost:3000/`

## API
My API was the Mars Rover Photos from https://api.nasa.gov and I got my API key. From the NASA website, I understand the API is maintained by Chris Cerami.
I went to https://github.com/chrisccerami/mars-photo-api to understand more about documentation. The README suggested to use https://mars-photos.herokuapp.com/. While I was able to fetch images using API key, I decided to take his suggestion. 


## Wins
- It is a great practice in building a react app. 

## Challenges
- Deployment, I had an issue with deploying the React App on Heroku. 
I keep on getting the error `TypeError: MiniCssExtractPlugin is not a constructor`. I was able to find the solution[here](https://stackoverflow.com/questions/70715794/typeerror-minicssextractplugin-is-not-a-constructor/70716720). I ran `npm i -D --save-exact mini-css-extract-plugin@2.4.5` on my terminal and that fixed the problem and deployed.
### Future Iterations
- Add the likes information to local storage, so the likes would still persists if the user leaves or reloads the page.



