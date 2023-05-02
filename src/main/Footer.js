import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HouseIcon from '@mui/icons-material/House';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AddBoxIcon from '@mui/icons-material/AddBox'

export default function Footer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <footer>
      <Tabs className='footer-tabs' value={value} onChange={handleChange} aria-label="icon label tabs example">
        <Tab icon={<HouseIcon />} label="HOME" />
        <Tab icon={<FastfoodIcon />} label="ALL RECIPES" />
        <Tab icon={<AddBoxIcon />} label="ADD RECIPE" />
      </Tabs>
    </footer>
  );
}