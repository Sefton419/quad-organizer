import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import {Card, CardActions, CardContent, Button} from '@material-ui/core/';
import './Quadrant.css';

class Quadrant extends Component {
    render() {
        return (
            <div className="quadrant">
                <Col md={6} sm={6}>
                    <Card>
                        <div class="quadrant-card">
                            <CardContent>This is a quadrant</CardContent>
                            <CardActions>
                                <Button size="small">New Task</Button>
                            </CardActions>
                        </div>
                    </Card>
                </Col>
            </div>
        );
    }
}

export default Quadrant;
