import React, { Component  } from 'react';
import {Grid, Row, Col, FormControl, ControlLabel, FormGroup} from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

export default class EditInfo extends Component {

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
                    label="Update Name"
                    placeholder="Your Name"
                />
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Update Email"
                    placeholder="Your Email"
                />
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Update Password"
                    placeholder="Your Old Password"
                />
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Type Password Again"
                    placeholder="Your Old Password"
                />
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Type New Password"
                    placeholder="Your New Password"
                />
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Upload New Image"
                    placeholder="Image URL"
                />
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Update Introduction"
                    placeholder="Your New Introduction"
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
            </form>
        )
    }
}