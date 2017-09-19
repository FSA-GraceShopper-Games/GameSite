import React, { Component  } from 'react';
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import {Grid, Row, Checkbox, Col, FormControl, ControlLabel, FormGroup, Carousel, Button} from 'react-bootstrap';
import Form from './BuyNowForm.js'
import Review from './Reviews'

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

    console.log('sup', props.product, props.reviews)
    return(
      <div>
        <h1>{props.product.name}</h1>
        <Row>
            <Col xs={6} md={8} lg={9}>
                <Carousel activeIndex={props.index} direction={props.direction} onSelect={props.handleSelect}>
                    <Carousel.Item>
                        <img width={900} height={500} alt="NO IMAGE AVAILABLE!!!" src={props.product.image}/>
                    <Carousel.Caption>
                        <h3>Box Art</h3>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
            <Col xs={6} md={8} lg={12}>
                {
                    props.reviews.map(function(x){
                        return (
                            <Row key={x.id}>
                                <Review review={x} />
                            </Row>
                        )
                    })
                }
            </Col>
        </Row>
            <Link to={'/addreview/'+ props.product.id}>
                <Button>Add A Review</Button>
            </Link>
            <Col xs={6} md={4} lg={3}>
                <Form handleSubmit={props.handleSubmit}/>
            </Col>
        </div>
    )
  }

export default withRouter(WholePageSingle)