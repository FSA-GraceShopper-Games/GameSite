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

export default class Addreviewform extends Component {

    constructor(props) {
        super(props)
        this.state{
            productId: this.props.match.params.id
        }
        this.handleTitleChange.bind(this)
        this.handleReviewChange.bind(this)
        this.handleSubmit.bind(this)
    }

    handleTitleChange(evt){
        this.setState({title: evt.target.value})
    }

    handleReviewChange(evt){
        this.setState({comment: evt.target.value})
    }

    handleSubmit(evt){
        evt.preventDefault();
        if(!this.state.userId){
            this.setState({userId: 5})
        }
        axios.post('/api/review', this.state)
    }

    render() {
        return (
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
                <Button value={1} onClick={this.handleSubmit}>Submit Review</Button>
            </form>
        )
    }
}