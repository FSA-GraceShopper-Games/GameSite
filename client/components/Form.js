import React, { Component  } from 'react';
import {FormControl, ControlLabel, FormGroup} from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

export default class AllProducts extends Component {

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
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Any Comments?"
                    placeholder="Enter Comments"
                />
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
                Final Price
            </form>
        )
    }
}