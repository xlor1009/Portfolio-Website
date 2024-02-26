import * as React from 'react';
import Chip from '@mui/joy/Chip';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';


export default function Navigation() {
  return (
    <List>
      <ListItem>
        <ListItemButton>
          <ListItemContent><h2>Home</h2></ListItemContent>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemContent><h2>Projects</h2></ListItemContent>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemContent><h2>Contact</h2></ListItemContent>
        </ListItemButton>
      </ListItem>
    </List>
  );
}