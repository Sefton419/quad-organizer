import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import {Card, CardActions, CardContent, Button, Input} from '@material-ui/core/';
import QuadList from './QuadList';
import './Quadrant.css';

class Quadrant extends Component {
    state = {
        displayTaskInput: false,
        taskInputString: ''
    };

    toggleTaskInput = () => {
        const {displayTaskInput} = this.state;
        this.setState({displayTaskInput: !displayTaskInput});
    };

    render() {
        const {list, listNum, toggleListItemChecked, createListItem} = this.props;

        return (
            <div className="quadrant">
                <Col md={6} sm={6}>
                    <Card>
                        <CardContent>
                            <QuadList
                                list={list}
                                listNum={listNum}
                                toggleListItemChecked={toggleListItemChecked}
                            />
                        </CardContent>
                        <CardActions>
                            <Button
                                size="small"
                                onClick={() => {
                                    this.toggleTaskInput();
                                }}>
                                New Task
                            </Button>
                            {this.state.displayTaskInput ? (
                                <form
                                    onSubmit={event => {
                                        event.preventDefault();
                                        const {taskInputString} = this.state;
                                        createListItem(taskInputString, list, listNum);
                                    }}>
                                    <Input
                                        fullWidth
                                        onChange={event => {
                                            this.setState({
                                                taskInputString: event.target.value
                                            });
                                        }}
                                    />
                                </form>
                            ) : null}
                        </CardActions>
                    </Card>
                </Col>
            </div>
        );
    }
}

export default Quadrant;
