# Kandi
Kandi is a tinder-inspiried application. Users are given a list of music festivals they can click 'going' to, which generates a list of my events that they are attending. For each music festival, they are given a list of users who are also attending that music festival. They can choose to like or dislike the user. If two users like each other a match is created which enables them to message each other. 

It makes api requests to our custom kandi-api server. The chat feature is built fromt scratch and incorporates ActionCable as a websocket to allow users to messages each other in real time. 

## Final Product 
**Kandi**
[!["Watch the video"](https://github.com/cphung1/kandi/blob/master/public/readme-media/video-screenshot.png)](https://www.youtube.com/watch?v=xPCxgsX18-o&feature=youtu.be)

## Dependencies 

- classnames
- axios
- material-ui
- bootstrap
- font awesome
- kandi-api

## Getting Started

1. Install dependencies using the `npm install` command.
2. Get and install the [server](https://github.com/cphung1/kandi-api). 
3. Run the server. 
4. Run this client by using the `npm start` command.
