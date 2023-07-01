import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {ListItemIcon} from "@mui/material";

export const SideBar = ({ items, onItemClick }) => {
    const handleItemClick = (item) => {
        onItemClick(item);
    };

    return (
        <List>
            {items.map((item) => (
                <ListItemButton key={item.id} onClick={() => handleItemClick(item)}>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                </ListItemButton>
            ))}
        </List>
    );
};

export default SideBar;