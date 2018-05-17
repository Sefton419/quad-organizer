import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Grid>
                        <Row>
                            <Col md={6}>Hey</Col>
                            <Col md={6}>Hey</Col>
                        </Row>
                        <Row>
                            <Col md={6}>Hey</Col>
                            <Col md={6}>Hey</Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default App;
