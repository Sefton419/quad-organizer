import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {List} from '@material-ui/core/';
import QuadListItem from './QuadListItem';
import './QuadList.css';

const QuadList = ({list, listNum, toggleListItemChecked}) => {
    const mapListToCard = arr => {
        return arr.map((item, i) => {
            return (
                <QuadListItem
                    key={item.id}
                    list={list}
                    listItem={item}
                    listNum={listNum}
                    toggleListItemChecked={toggleListItemChecked}
                    i={i}
                />
            );
        });
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
