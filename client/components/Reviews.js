
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Grid, Row, Col} from 'react-bootstrap';

export default function Review(props){
        var stars ='';
        for (var i = 0; i < props.review.stars; i++) {
            stars+= ' ☆'
        }
        return (
            <div>
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={6}>
                        Some Guy
                    </Col>
                    <Col xs={12} md={6}>
                    {
                        stars
                    }
                    </Col>
                    <Col xs={12} md={12}>
                        <h3>{props.review.title}</h3>
                    </Col>
                    <Col xs={12} md={12}>
                        <p>{props.review.comment}</p>
                    </Col>

                </Row>
            </Grid>
            <br/>
            </div>

        )
    }