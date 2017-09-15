import React, { Component  } from 'react';
import {withRouter} from 'react-router'
import {Grid, Row, Checkbox, Col, FormControl, ControlLabel, FormGroup, Carousel} from 'react-bootstrap';
import Form from './Form.js'

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

const game = {
    name: "Destiny",
    description: "Some Game",
    images: [
        'https://assets.vg247.com/current//2017/03/destiny_2.jpg', 
        'https://rectifygaming.com/wp-content/uploads/2016/09/destiny-bungie-main.jpg',
        'https://rectifygaming.com/wp-content/uploads/2016/09/destiny-bungie-main.jpg',
        'http://vignette4.wikia.nocookie.net/video151/images/5/59/Destiny_The_Taken_King_Multiplayer_Gameplay_-_IGN_Live_E3_2015/revision/latest?cb=20150617002312'
    ],
    price: 59
}

function WholePageSingle(props){
    console.log(props)
    return(
        <Carousel activeIndex={props.index} direction={props.direction} onSelect={props.handleSelect}>
        <Carousel.Item>
          <img width={900} height={500} alt="400x180" src={game.images[0]}/>
          <Carousel.Caption>
            <h3>Destiny</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="400x180" src={game.images[1]}/>
          <Carousel.Caption>
            <h3>Singleplayer</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="400x180" src={game.images[2]}/>
          <Carousel.Caption>
            <h3>Multiplayer</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }

export default withRouter(WholePageSingle)