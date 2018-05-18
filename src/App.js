import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Quadrant from './components/Quadrant';
import logo from './logo.svg';
import './App.css';

import {AppBar, Toolbar} from '@material-ui/core';

class App extends Component {
    state = {
        list1: [
            'put out the fire in the server room',
            'fend off the company from army of ninjas'
        ],
        list2: ['update my OS', 'read all of my emails'],
        list3: [
            'write documentation for new API',
            'make sure JIRA tasks are marked off as done'
        ],
        list4: ['play Street Fighters for 2 hrs with friend']
    };
    render() {
        const {list1, list2, list3, list4} = this.state;
        return (
            <div className="App">
                <AppBar position="static">
                    <Toolbar />
                </AppBar>
                <div className="container">
                    <Grid>
                        <Row>
                            <Quadrant list={list1} />
                            <Quadrant list={list2} />
                        </Row>
                        <Row>
                            <Quadrant list={list3} />
                            <Quadrant list={list4} />
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default App;
