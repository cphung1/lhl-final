import React, { useEffect, useState } from 'react';
import './App.css';
import Events from "./components/Events/Events"
import axios from 'axios'
import MyEvents from "./components/MyEvents/MyEvents"
import Login from "./components/Login/Login"
import Home from "./components/Home/Home"
import Swipe from "./components/Swipe/Swipe"
import MyProfile from "./components/MyProfile/MyProfile"
import Chat from "./components/Chat/Chat"
import NavBar from "./components/Nav/NavBar"
import Messages from './components/Chat/Messages'
import { ActionCableConsumer } from 'react-actioncable-provider';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

// Font Awesome Stuff
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons'
library.add( faHeart, faTimes)

function App() {
  const today = new Date();
  const [state, setState] = useState({
    events: [],
    event: null,
    currentEventName: null,
    myEvents: [],
    user: null,
    myProfile: [],
    mySwipes: [],
    myMatches: [],
    currentConvo: null,
    myMessages: [],
    myMatchMsgUser: null,
    messagedUserID: null,
    currentUserEmail: 'abaynes@gmail.com',
    modalShow: false,
    msgNotification: false,
  });

  const setMessagedUserID = (user_id) => setState(prev => ({...prev, messagedUserID: user_id}))

  const setMsgNotification = (status) => setState(prev => ({...prev, msgNotification: status}))

  const setMyMatchMsgUser = match_id => {setState(prev => ({...prev, myMatchMsgUser: match_id}))}

  const setUser = user => {setState(prev => ({...prev, user: user}))}
  
  const setEvent = event => setState(prev => ({...prev, event: event }));

  const logout = () => setState(prev => ({...prev, user: null}));

  // const setCurrentConvo = () => {setState(prev => ({...prev, currentConvo: null})); }
  const setCurrentConvo = () => {console.log(state.currentConvo)}

  const setMyMessages = () => {setState(prev => ({...prev, myMessages: []}))}

  const setModalShow = () => setState(prev => ({...prev, modalShow: false}))

  const getMyMessages = function(convo_id) {
    Promise.all([
      Promise.resolve(axios.get(`api/messages/${convo_id}`))
    ]).then(all => {
      setState(prev => ({
        ...prev,
        myMessages: all[0].data
      }))
    }).catch(() => {
      console.log("cannot fetch my conversations")
    })
  }

  const getMyConversations = function(current_user, match_user) {
    Promise.all([
      Promise.resolve(axios.get(`api/conversations/${current_user}`, {
        params: {
          match_id: match_user
        }
    }))
    ]).then(all => {
      setState(prev => ({
        ...prev,
        currentConvo: all[0].data[0].id
      }))
      getMyMessages(all[0].data[0].id)
      // console.log('id', all[0].data[0].id
    }).catch(() => {
      console.log("cannot fetch my conversations")
    })
  };

  const getMyMatches = function(current_user) {
    Promise.all([
      Promise.resolve(axios.get(`api/match/${current_user}`))
    ]).then(all => {
      setState(prev => ({
        ...prev,
        myMatches: all[0].data
      }))
    })
    .catch(() => {
      console.log("cannot fetch my matches")
    })
  };

  const getMyProfileDetails = function(current_user) {
    Promise.all([
      Promise.resolve(axios.get(`/users/${current_user}`))
    ]).then(all => {
      setState(prev => ({
        ...prev,
        myProfile: all[0].data[0]
      }))
    }).catch(() => {
      console.log("cannot fetch single events")
    })
  };

  const fetchSingleEvent = function(event_id) {
    const getSingleEvents = axios.get(`/api/events/${event_id}`)
    Promise.all([
      Promise.resolve(getSingleEvents)
    ]).then(all => {
      setState(prev => ({
        ...prev,
        currentEventName: all[0].data[0].name
      }))
    }).catch(() => {
      console.log("cannot fetch single events")
    })
  }

  const likeUser = (liker_id, likee_id) => {
    let data = { 
      liker_id: liker_id,
      likee_id: likee_id
    };

    return axios.post(`/api/like`, {data})
    .then((res) => {
      if (res.data[0]) {
        axios.post('/api/match', {data})
        .then(res => {
          console.log("CREATED MATCH OBJECT!!!!!!",res)
          setState(prev => ({...prev, modalShow: true}))
          axios.post('/api/conversations', {data})
          .then(res => {
            console.log("CONVERSATION CREATED", res)
          })
        })
      } else {
        console.log("NO MATCH YET")
      }
    }).catch(error => 
      console.log("Cannot like")
    )
  }

  const dislikeUser = (disliker_id, dislikee_id) => {
    let data = { 
      disliker_id: disliker_id,
      dislikee_id: dislikee_id
    };

    return axios.post(`/api/dislike`, {data})
    .then((res) => {
      console.log(res)
    }).catch(error => 
      console.log("Cannot dislike")
    )
  }

  const getFilterUsers = (user_id, event_id) => {
    return Promise.all([
      Promise.resolve(axios.get(`/api/users/${event_id}`, {
        params: {
          user_id: user_id
        }
    }))
    ]).then(all => {
      setState(prev => ({...prev, mySwipes: all[0].data}))
      console.log("swipes", state.mySwipes)
      console.log("data", all[0].data)
    }).catch((err) => {
      console.log("CANT SEND PARAMS BY GETFILTERUSERS")
    })
  }

  const clickGoing = (event) => {
    let data = { 
      event_id: event.event_id, 
      user_id: state.user
    };

    return axios.post(`/api/user_event`, {data})
    .then((res) => {
      fetchMyEvents(state.user)
      setState(prev => ({...prev, event: null}))
    }).catch(error => 
      console.log(error)
    )
  }

  const fetchMyEvents = function(user_id) {
    const getMyEvents = axios.get(`/api/user_event/${user_id}`)
    Promise.all([
      Promise.resolve(getMyEvents)
    ]).then(all => {
      setState(prev => ({
        ...prev,
        myEvents: all[0].data
      }))
    }).catch(() => {
      console.log("cannot fetch myEvents")
    })
  }

  const reload = function() {
    const getEvent = axios.get("/api/events")

    Promise.all([
      Promise.resolve(getEvent),
    ]).then(all => {
      setState(prev => ({
        ...prev,
        events: all[0].data,
      }))
    }).catch(() => {
      console.log("error")
    })
  }

  useEffect(() => {
    reload()
  }, [])

  const handleReceivedMsg = (message) => {
    getMyMessages(message.conversation_id)
    console.log(message)
    if(message.user_id !== state.user) {
      setMsgNotification(true)
      setMessagedUserID(message.user_id)
    }
  }

  const validates = (user) => {
    return user === null ? (
        <Login 
          user={state.user}
          setUser={setUser}
          fetchMyEvents={fetchMyEvents}
          getMyProfileDetails={getMyProfileDetails}
        />
    ) : (
      <div>
        {/* {getMyProfileDetails(state.user)} */}
        <Redirect to="/home"/>
        <NavBar
          setCurrentConvo={setCurrentConvo}
          setMyMessages={setMyMessages}
          msgNotification={state.msgNotification}
          setMsgNotification={setMsgNotification}
        />
          <ActionCableConsumer
            channel="MessagesChannel"
            onReceived={handleReceivedMsg}
          />
      </div>
    )
  }

  return (
    <Router> 
      <div className="App">
        <Link to="/login" />
        {validates(state.user)}
      </div>

      <Switch>
        <Route path="/upcoming_events">
          <Events 
            events={state.events}
            event={state.event}
            setEvent={setEvent}
            clickGoing={clickGoing}
            user={state.user}
          />
        </Route>
        <Route path="/my_events">
          <MyEvents 
            myEvents={state.myEvents}
            user={state.user}
            event={state.event}
            getFilterUsers={getFilterUsers}
            currentUserEmail={state.currentUserEmail}
            fetchSingleEvent={fetchSingleEvent}
          />
        </Route>

        <Route path='/login'>
            <Login />
        </Route>

        <Route path='/home'>
            <Home 
            />
        </Route>

        <Route path='/chat'>
            <Chat 
              getMyMatches={getMyMatches}
              user={state.user}
              myMatches={state.myMatches}
              getMyConversations={getMyConversations}
              myConversations={state.myConversations}
              setMyMatchMsgUser={setMyMatchMsgUser}
              // user={state.user}
              // getMyMatches={getMyMatches}
              messagedUserID={state.messagedUserID}
              setMessagedUserID={setMessagedUserID}
            />
        </Route>

        <Route path='/myprofile'>
            <MyProfile 
              getMyProfileDetails={getMyProfileDetails}
              user={state.user} 
              myProfile={state.myProfile}
              logout={logout}
            />
        </Route>

        <Route path='/swipe'>
          <Swipe 
            mySwipes={state.mySwipes}
            likeUser={likeUser}
            dislikeUser={dislikeUser}
            currentUser={state.user}
            eventName={state.currentEventName}
            modalShow={state.modalShow}
            setModalShow={setModalShow}
          />
        </Route>

        <Route path='/messages'>
          <Messages 
            currentConvo={state.currentConvo}
            myMessages={state.myMessages}
            myProfile={state.myProfile}
            user={state.user}
            myMatchMsgUser={state.myMatchMsgUser}
            setCurrentConvo={setCurrentConvo}
            setMyMessages={setMyMessages}
            getMyMessages={getMyMessages}
            setMsgNotification={setMsgNotification}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
