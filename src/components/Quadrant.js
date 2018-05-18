import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import {Card, CardActions, CardContent, Button} from '@material-ui/core/';
import QuadList from './QuadList';
import './Quadrant.css';

class Quadrant extends Component {
    mapListToCard = ({list}) => {};

    render() {
        const {list} = this.props;
        return (
            <div className="quadrant">
                <Col md={6} sm={6}>
                    <Card>
                        <CardContent>
                            <QuadList list={list} />
                        </CardContent>
                        <CardActions>
                            <Button size="small">New Task</Button>
                        </CardActions>
                    </Card>
                </Col>
            </div>
        );
    }
}

export default Quadrant;
