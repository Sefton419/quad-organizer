import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Checkbox
} from '@material-ui/core/';
import QuadListItem from './QuadListItem';
import './QuadList.css';

const QuadList = ({list, listNum, toggleListItemChecked}) => {
    const mapListToCard = arr => {
        return arr.map((item, i) => (
            <QuadListItem
                key={i}
                list={list}
                listItem={item}
                listNum={listNum}
                toggleListItemChecked={toggleListItemChecked}
                i={i}
            />
        ));
    };

    return (
        <div className="list">
            <Row>
                <Col md={12}>
                    <List>{mapListToCard(list)}</List>
                </Col>
            </Row>
        </div>
    );
};

export default QuadList;
