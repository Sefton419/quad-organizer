import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Checkbox
} from '@material-ui/core/';
import './QuadList.css';

const QuadList = ({list, listNum, toggleListItemChecked}) => {
    const mapListToCard = arr => {
        return arr.map((item, i) => (
            <ListItem key={i} dense button disableRipple>
                <Checkbox
                    disableRipple
                    onChange={event => {
                        toggleListItemChecked(event, list, listNum, i);
                    }}
                />
                <ListItemText primary={item.string} />
            </ListItem>
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
