import * as React from 'react';

import { useNavigate } from "react-router-dom";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HouseIcon from '@mui/icons-material/House';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AddBoxIcon from '@mui/icons-material/AddBox'

export default function Footer() {

  const [value, setValue] = React.useState(0);
  const paths = ['/', '/index', '/add']

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`${paths[newValue]}`)
  };

  return (
    <footer>
      <Tabs className='footer-tabs' value={value} onChange={handleChange} aria-label="icon label tabs example">
        <Tab to='/' icon={<HouseIcon />} label="HOME" />
        <Tab to='/' icon={<FastfoodIcon />} label="ALL RECIPES" />
        <Tab to='/' icon={<AddBoxIcon />} label="ADD RECIPE" />
      </Tabs>
    </footer>
  );
}