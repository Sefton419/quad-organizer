import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Quadrant from './components/Quadrant';
import logo from './logo.svg';
import './App.css';

import {AppBar, Toolbar} from '@material-ui/core';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppBar position="static">
                    <Toolbar />
                </AppBar>
                <div className="container">
                    <Grid>
                        <Row>
                            <Quadrant />
                            <Quadrant />
                        </Row>
                        <Row>
                            <Quadrant />
                            <Quadrant />
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default App;
