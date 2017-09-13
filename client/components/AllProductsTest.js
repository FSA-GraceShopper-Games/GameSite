import React, { Component  } from 'react';
// import {  } from '../store';
// import {connect} from 'react-redux';
// import {Sidebar} from './Sidebar'
import {Grid, Row, Col, FormControl} from 'react-bootstrap';


const product1 = {
    name: 'Destiny',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51cNjbb5sbL._AC_US218_.jpg',
    description: 'Picanha tri-tip meatloaf, short loin beef salami pork t-bone filet mignon cow flank porchetta cupim. Chuck ball tip biltong capicola pork, venison bacon bresaola shank jowl chicken fatback turducken. Sirloin landjaeger ground round salami cupim pork belly jerky beef ham hock burgdoggen jowl ball tip boudin. Frankfurter ham hock tri-tip venison turkey, pig t-bone spare ribs bresaola pork chop beef ribs prosciutto kielbasa salami fatback. Pastrami filet mignon bacon, tongue kielbasa meatball fatback tail biltong jowl ribeye pork loin corned beef pancetta.'
}
const product2 = {
    name: 'The Last Of Us',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51fR72yjSFL._SX215_.jpg',
    description: 'Bacon ipsum dolor amet leberkas hamburger drumstick porchetta brisket. Pancetta ball tip ground round doner, drumstick tri-tip biltong spare ribs. Short loin doner ground round beef pork belly tongue brisket beef ribs sirloin picanha. Corned beef pancetta pork pork belly cow alcatra capicola, fatback doner chuck ham hock turkey tenderloin chicken. Filet mignon shoulder alcatra flank turducken turkey bacon picanha pork belly shank fatback pig. Alcatra spare ribs filet mignon capicola turkey pork. Strip steak alcatra chicken pork chop meatball.'
}
export default class AllProducts extends Component {

    constructor(props) {
        super(props)
        
    }


    renderSingleProd(product) {
        const style = {
            backgroundColor: 'red',
            height: '100px'
        }
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={12}>
                        <h1>{product.name}</h1>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={12} md={3}>
                        <img src={product.image}/>
                    </Col>
                    <Col xs={6} md={6}>
                        <p>{product.description}</p>
                    </Col>
                    <Col xs={6} md={3}>
                        <FormControl>
                        </FormControl>
                    </Col>
                </Row>

            </Grid>
        )
    }




    render() {
        
        const style = {
            backgroundColor: 'green'
        }
        return (
            
            <div height='100vh'>
                <Col xs={12} md={12} style={style}>
                <h1>
                    Games
                </h1>
                {this.renderSingleProd(product1)}
                {this.renderSingleProd(product2)}

 
                
            
            
              
                </Col>
            </div>
        )
    }
}





// function mapState(state) {
    

// }

// function mapDispatch(dispatch) {

// }


// export default connect(mapState, mapDispatch)(AllProducts)