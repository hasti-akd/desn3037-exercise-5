import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Button, TextField } from '@mui/material';

export default function BasicList() {

    function add(name){
        alert("You are adding!");
    }

    function remove(name){
        alert("You are removing!");
    }

  return (
    <Box sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>

    <TextField label="Name" variant="outlined" sx= {{width:'100%', mb: 2}}/>    
    <Button variant="contained" sx= {{width:'100%', mb: 1, }} onClick={(e) => {add()} }>Add</Button>   
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding onClick={(e) => {remove()} }>
            <ListItemButton >
              <ListItemText primary="Item #0" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}