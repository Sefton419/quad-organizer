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

class QuadList extends Component {
    mapListToCard = () => {
        const {list} = this.props;
        return list.map((item, i) => (
            <ListItem key={i} dense button>
                <Checkbox disableRipple />
                <ListItemText primary={item} />
            </ListItem>
        ));
    };

    render() {
        return (
            <div className="list">
                <Row>
                    <Col md={12}>
                        <List>{this.mapListToCard()}</List>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default QuadList;
