import React from 'react';
import {ListItem, ListItemText, Checkbox} from '@material-ui/core/';
import './QuadListItem.css';

const QuadListItem = ({list, listItem, listNum, toggleListItemChecked, i}) => {
    return (
        <ListItem key={i} dense button disableRipple>
            <Checkbox
                disableRipple
                onChange={event => {
                    toggleListItemChecked(event, list, listNum, i);
                }}
            />
            <ListItemText primary={listItem.string} />
        </ListItem>
    );
};

export default QuadListItem;
