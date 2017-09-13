import React, {Component} from 'react'
import store, {connect} from 'react-redux'
import {Grid, Row, Col, Image} from 'react-bootstrap'

const product = {
    name: "Destiny 2",
    description: "Some game that probably pretty good but I'll never have the goddamn time to play it but I'm old and have no free time anymore plus destiny sounds like a stripper name",
    images: [
        'https://upload.wikimedia.org/wikipedia/en/b/be/Destiny_box_art.png', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvltosrJtpbrl66OQM8SGzEdyUDuOP1IvmV8GjE6UvBuLCuWmnZ-ncgA', 
        'https://assets.vg247.com/current//2014/01/Destiny-mars-venus-1.jpg',
        'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwixzIPJwKLWAhVLxYMKHZYHAAsQjRwIBw&url=http%3A%2F%2Fteambeyond.net%2F35-new-destiny-screenshots%2F&psig=AFQjCNHHrC-GjlyXX_yJxevzKFcJ7G3P1A&ust=1505403835238276'
    ]
}


function SingleProduct(props){
    props = product
    return (
    <div>
        <Grid>
                <Row>
                    <Col xs={6} md={4}>
                        {props.name}
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={props.images[0]} circle />
                    </Col>
                    <Col xs={6} md={4}>
                        {props.description}
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={props.images[1]} rounded />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={props.images[2]} circle />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={props.images[3]} thumbnail />
                    </Col>
                </Row>
            </Grid>
        </div>
            )
}


// const mapStateToProps = function(state){
//     return {product: state.product};
//  }

// export default connect(mapStateToProps)(SingleProduct);

export default SingleProduct