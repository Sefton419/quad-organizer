import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Quadrant from './components/Quadrant';
import logo from './logo.svg';
import './App.css';

import {AppBar, Toolbar} from '@material-ui/core';

class App extends Component {
    state = {
        list1: [
            {string: 'put out the fire in the server room', checked: false},
            {string: 'fend off the company from army of ninjas', checked: false}
        ],
        list2: [
            {string: 'update my OS', checked: false},
            {string: 'read all of my emails', checked: false}
        ],
        list3: [
            {string: 'write documentation for new API', checked: false},
            {string: 'make sure JIRA tasks are marked off as done', checked: false}
        ],
        list4: [{string: 'play Street Fighters for 2 hrs with friend', checked: false}]
    };

    toggleListItemChecked = (event, list, num, i) => {
        const checked = event.target.checked;
        list[i].checked = checked;
        this.setState({['list' + num]: list});
        console.log(this.state);
    };

    render() {
        const {list1, list2, list3, list4} = this.state;
        const {toggleListItemChecked} = this;
        return (
            <div className="App">
                <AppBar position="static">
                    <Toolbar />
                </AppBar>
                <div className="container">
                    <Grid>
                        <Row>
                            <Quadrant
                                list={list1}
                                listNum={1}
                                toggleListItemChecked={toggleListItemChecked}
                            />
                            <Quadrant
                                list={list2}
                                listNum={2}
                                toggleListItemChecked={toggleListItemChecked}
                            />
                        </Row>
                        <Row>
                            <Quadrant
                                list={list3}
                                listNum={3}
                                toggleListItemChecked={toggleListItemChecked}
                            />
                            <Quadrant
                                list={list4}
                                listNum={4}
                                toggleListItemChecked={toggleListItemChecked}
                            />
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default App;
