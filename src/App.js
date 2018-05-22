import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Button} from '@material-ui/core';
import Quadrant from './components/Quadrant';
import './App.css';

import {AppBar, Toolbar} from '@material-ui/core';

class App extends Component {
    state = {
        list1: [
            {id: 'abcd', string: 'put out the fire in the server room', checked: false},
            {
                id: 'uvwx',
                string: 'fend off the company from army of ninjas',
                checked: false
            }
        ],
        list2: [
            {id: 'efgh', string: 'update my OS', checked: false},
            {id: 'uvwx', string: 'read all of my emails', checked: false}
        ],
        list3: [
            {id: 'ijkl', string: 'write documentation for new API', checked: false},
            {
                id: 'mnop',
                string: 'make sure JIRA tasks are marked off as done',
                checked: false
            }
        ],
        list4: [
            {
                id: 'qrst',
                string: 'play Street Fighters for 2 hrs with friend',
                checked: false
            }
        ]
    };

    createListItem = (string, list, listNum) => {
        const listItem = {
            id: Math.random()
                .toString(36)
                .substring(7),
            string,
            checked: false
        };
        list.push(listItem);
        this.updateList(listNum, list);
    };

    deleteListItems = listNum => {
        const {state} = this;
        const newState = {};
        Object.keys(state).forEach(list => {
            newState[list] = state[list].filter(item => {
                return !item.checked;
            });
        });
        this.setState({...newState});
    };

    toggleListItemChecked = (event, list, listNum, i) => {
        // i is the index of list item in specific list array
        list[i].checked = event.target.checked;
        this.updateList(listNum, list);
    };

    updateList = (listNum, list) => {
        this.setState({['list' + listNum]: list});
    };

    render() {
        const {list1, list2, list3, list4} = this.state;
        const {toggleListItemChecked, createListItem, deleteListItems} = this;
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
                                createListItem={createListItem}
                            />
                            <Quadrant
                                list={list2}
                                listNum={2}
                                toggleListItemChecked={toggleListItemChecked}
                                createListItem={createListItem}
                            />
                        </Row>
                        <Row>
                            <Quadrant
                                list={list3}
                                listNum={3}
                                toggleListItemChecked={toggleListItemChecked}
                                createListItem={createListItem}
                            />
                            <Quadrant
                                list={list4}
                                listNum={4}
                                toggleListItemChecked={toggleListItemChecked}
                                createListItem={createListItem}
                            />
                        </Row>
                        <Row>
                            <Col md={6} sm={6}>
                                <Button
                                    onClick={() => {
                                        deleteListItems();
                                    }}>
                                    Delete Finished Tasks
                                </Button>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default App;
