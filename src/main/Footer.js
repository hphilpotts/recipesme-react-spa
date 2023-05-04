import * as React from 'react';

import { useNavigate } from "react-router-dom";

import { Paper } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HouseIcon from '@mui/icons-material/House';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AddBoxIcon from '@mui/icons-material/AddBox'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export default function Footer({ detailView, isInDetailView }) {

  const [value, setValue] = React.useState(0);
  const paths = ['/', '/index', '/add']

  const navigateTo = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigateTo(`${paths[newValue]}`)
  };

  const resetFooter = () => {
    isInDetailView(false)
  }

  const backToIndex = () => {
    resetFooter()
    navigateTo('/index')
  }

  return (
    <footer>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <Tabs className='footer-tabs' value={value} onChange={handleChange} onClick={resetFooter} aria-label="icon label tabs example">
          <Tab to='/' icon={<HouseIcon />} label="HOME" />
          { detailView ? 
          <Tab to='/' icon={<MenuOpenIcon />} label="BACK" onClick={backToIndex}/>
          : 
          <Tab to='/' icon={<FastfoodIcon />} label="RECIPES" />
          }
          <Tab to='/' icon={<AddBoxIcon />} label="ADD RECIPE" onClick={resetFooter} />
        </Tabs>
      </Paper>
    </footer>
  );
}