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

    createListItem = (string, list, listNum) => {
        const listItem = {
            string,
            checked: false
        };
        console.log('listItem: ', listItem);
        list.push(listItem);
        console.log('updatedList:', list);
        this.updateList(listNum, list);
    };

    deleteListItems = listNum => {
        const updatedList = this.state.filter(item => !item.checked);
        this.updateList(listNum, updatedList);
    };

    toggleListItemChecked = (event, list, listNum, i) => {
        // i is the index of list item in specific list array
        list[i].checked = event.target.checked;
        this.updateList(listNum, list);
        console.log(this.state);
    };

    updateList = (listNum, list) => {
        this.setState({['list' + listNum]: list});
    };

    render() {
        const {list1, list2, list3, list4} = this.state;
        const {toggleListItemChecked, createListItem} = this;
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
                    </Grid>
                </div>
            </div>
        );
    }
}

export default App;
