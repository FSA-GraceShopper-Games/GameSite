import React, { Component  } from 'react';
import {FormControl, ControlLabel, FormGroup, Button} from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

export default class BuyNowForm extends Component {

    constructor(props) {
        super(props)
        
    }


    render() {
        const style = {
            backgroundColor: 'red',
            height: '100px'
        }
        return (
            <form>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="five">5</option>
                    </FormControl>
                </FormGroup>
                <Button value={1} onClick={this.props.handleSubmit}>Buy Now</Button>
            </form>
        )
    }
}