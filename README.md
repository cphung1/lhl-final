# Kandi
Kandi is a tinder-inspiried application. Users are given a list of music festivals they can click 'going' to, which generates a list of my events that they are attending. For each music festival, they are given a list of users who are also attending that music festival. They can choose to like or dislike the user. If two users like each other a match is created which enables them to message each other. 

It makes api requests to our custom kandi-api server. The chat feature is built fromt scratch and incorporates ActionCable as a websocket to allow users to messages each other in real time. 

## Final Product 
**Kandi Demo Video**
Click to watch a demo! 
[!["Watch the video"](https://github.com/cphung1/kandi/blob/master/public/readme-media/video-screenshot.png)](https://www.youtube.com/watch?v=xPCxgsX18-o&feature=youtu.be)

## Screen Shots
**Login Page**
!["Screenshot of Login page"](https://github.com/cphung1/kandi/blob/master/public/readme-media/main.png)

**Home Page**
!["Screenshot of Home page"](https://github.com/cphung1/kandi/blob/master/public/readme-media/main.png)

**Upcoming Events**
!["Screenshot of upcoming events page"](https://github.com/cphung1/kandi/blob/master/public/readme-media/upcoming-events.png )

**Event Details**
!["Screenshot of event details"](https://github.com/cphung1/kandi/blob/master/public/readme-media/event-details.png)

**Like or Dislike A User**
!["Screenshot of swiping page"](https://github.com/cphung1/kandi/blob/master/public/readme-media/swipe.png)

**List of Users You Can Message**
!["Screenshot of my messages page"](https://github.com/cphung1/kandi/blob/master/public/readme-media/my-messages.png)

**Real Time Messages**
!["Screenshot of messages with single user"](https://github.com/cphung1/kandi/blob/master/public/readme-media/messages.png)

**Edit Your Profile Descirption**
!["Screenshot of my profile"](https://github.com/cphung1/kandi/blob/master/public/readme-media/my-profile.png)


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
