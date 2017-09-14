import React, { Component  } from 'react';
import {Grid, Row, Checkbox, Col, FormControl, ControlLabel, FormGroup} from 'react-bootstrap';
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
        'https://www.google.com/search?q=image+destiny&tbm=isch&imgil=Sqee7nuNwLducM%253A%253BaFRJxSs_X1lU9M%253Bhttps%25253A%25252F%25252Fwww.vg247.com%25252F2017%25252F03%25252F27%25252Fbungie-announces-destiny-2-with-a-new-teaser-image%25252F&source=iu&pf=m&fir=Sqee7nuNwLducM%253A%252CaFRJxSs_X1lU9M%252C_&usg=__1TwUCnhfnbPPBzH1VCh1ndg1LIM%3D&biw=1280&bih=726&ved=0ahUKEwi36ujWh6PWAhWKqFQKHULDBkAQyjcIPw&ei=7py5Wbe7LorR0gLChpuABA#imgrc=d_gWMO3AsoA_iM:',
        'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjUq8nyh6PWAhUmsFQKHUcNA5EQjRwIBw&url=http%3A%2F%2Fvgpwn.com%2F11-most-anticipated-games-of-2017%2F&psig=AFQjCNGQV2KO2LPhREwnNYcC5NP4-2aWwQ&ust=1505422962994058',
        'http://vignette4.wikia.nocookie.net/video151/images/5/59/Destiny_The_Taken_King_Multiplayer_Gameplay_-_IGN_Live_E3_2015/revision/latest?cb=20150617002312'
    ],
    price: 59
}

function WholePageSingle(props){
    return(
        <Carousel activeIndex={props.index} direction={props.direction}>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={}/>
          <Carousel.Caption>
            <h3>Destiny</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
          <Carousel.Caption>
            <h3>Singleplayer</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
          <Carousel.Caption>
            <h3>Multiplayer</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}