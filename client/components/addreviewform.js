import React, { Component  } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Row, FormControl, ControlLabel, FormGroup, Button, DropdownButton, MenuItem} from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

export default class Addreviewform extends Component {

    constructor(props) {
        super(props)
        this.state = {
            productId: this.props.match.params.id,
            userId: 1,
            title: '',
            comment: '',
            stars: ''
        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleReviewChange = this.handleReviewChange.bind(this)
        this.handleStarChange = this.handleStarChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // Might need to edit this
    handleTitleChange(evt){
        console.log(this.state)
        this.setState({title: evt.target.value})
    }

    handleReviewChange(evt){
        this.setState({comment: evt.target.value})
    }

    handleStarChange(evt){
        this.setState({stars: evt.target.value})
    }

    handleSubmit(evt){
        evt.preventDefault();
        axios.post('/api/review', this.state)
            .then(result => result.data)
            .then(review => console.log)
            .catch(console.error)
    }

    render() {
        return (
            <div>
                <form>
                    <ControlLabel>Title</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.titleValue}
                        placeholder="Enter Title"
                        onChange={this.handleTitleChange}
                    />
                    <ControlLabel>Review</ControlLabel>
                    <FormControl
                        type="textarea"
                        value={this.state.reviewValue}
                        placeholder="Enter Review"
                        onChange={this.handleReviewChange}
                    />
                    <ControlLabel>Stars</ControlLabel>
                    <FormControl
                        type="textarea"
                        value={this.state.reviewValue}
                        placeholder="Enter Review"
                        onChange={this.handleStarChange}
                    />
                    <Link to="/myaccount">
                        <Button value={1} onClick={this.handleSubmit}>Submit Review</Button>
                    </Link>

                </form>
            </div>
        )
    }
}