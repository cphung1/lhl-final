import React, {useState, useEffect} from 'react'
import "./Swipe.scss"
import OneProfile from "./OneProfile"
import Card from "./Card"
import ModalMatch from '../Modal/Modal'
import { Swipeable, direction } from 'react-deck-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function Swipe(props) {
  // const INITIAL_CARDS_STATE = props.INITIAL_CARDS_STATE;

  const [state, setState] = useState({isVisible: true})

  const toggleBox = () => {
    setState(prev => ({isVisible: !prev.isVisible}))
  }

  // const listSwipes = () => {
  //   props.mySwipes.map(element => {
  //     return(
  //       INITIAL_CARDS_STATE.push({
  //         id: element.id,
  //         name: element.name,
  //         birthdate: element.birthdate,
  //         location: element.location,
  //         description: element.description
  //       }
  //       )
  //     )
  //   })
  // }


  const [lastSwipeDirection, setLastSwipeDirection] = React.useState(null);

  const [cards, setCards] = useState(props.INITIAL_CARDS_STATE);

  const [history, setHistory] = useState([]);

  const handleOnSwipe = (swipeDirection) => {
    if (swipeDirection === direction.RIGHT) {
      setLastSwipeDirection('your right');
      props.likeUser(props.currentUser, cards[0].id); 
      toggleBox();
    }

    if (swipeDirection === direction.LEFT) {
      setLastSwipeDirection('your left');
      props.dislikeUser(props.currentUser, cards[0].id); 
      toggleBox();
    }


    setHistory(prev => [...prev, cards[0]])
    setCards((prev) => prev.slice(1));

  };



  const renderButtons = ({
    right,
    left,
  }) => (
      <div>
        <button onClick={() => {props.dislikeUser(props.currentUser, cards[0].id); toggleBox(); handleOnSwipe(direction.LEFT)}}>
          <FontAwesomeIcon icon={'times'} size='4x'className='times'/>
        </button>
        <button onClick={() => {props.likeUser(props.currentUser, cards[0].id); toggleBox(); handleOnSwipe(direction.Right)}}>
          <FontAwesomeIcon icon={'heart'} size='4x' className='heart' />
        </button>
      </div> 
  );
  // const listSwipes = props.mySwipes.map(element => {
  //   return (arr.push(<OneProfile 
  //     key = {element.id}
  //     id = {element.id}
  //     image = {element.image}
  //     name = {element.name}
  //     birthdate = {element.birthdate}
  //     location = {element.location}
  //     description = {element.description}
          //FUNCTIONS BELOW 
  //     likeUser={props.likeUser}
  //     dislikeUser={props.dislikeUser}
  //     currentUser={props.currentUser}
  //   />
  //   )
  //   )
  // })

  useEffect(() => {

  }, [cards])
  
  return (
    <div className="swipe"> 
    <div className="swipeHeader">
      <h1 className="swipeEvent">{props.eventName}</h1>
    </div>
    <Grid item xs={12}>
        {
          cards.length > 0
            ? (
              <div>
              <Swipeable
                renderButtons={renderButtons}
                onSwipe={handleOnSwipe}
              >
                <Card item={cards[0]} />
              </Swipeable>
                {props.modalShow ? (
                  <ModalMatch
                  show={props.modalShow}
                  name={history[history.length - 1].name}
                  id={history[history.length - 1].id}
                  onHide={() => {props.setModalShow()}}
                  user={props.user}
                />

                ) : <div/>}
              </div>
            )
            : (
              <Typography variant="body1">
                Looks like you have reached the end here =)
              </Typography>
            )
        }
      </Grid>
    </div>
  )
}

