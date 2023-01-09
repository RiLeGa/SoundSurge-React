import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

import UserList from "./UserList";
import ProductList from './ProductList';
import PruebaProductos from './PruebaProductos';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


function Admin() {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main className='lista'>

    <Box sx={{ width: '100%'}}>
      <Box>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Listado de ususarios" />
        <Tab label="Listado de productos" />
        <Tab label="Listado de productos 2" />
      </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <UserList/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProductList/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PruebaProductos/>
      </TabPanel>
    </Box>

    </main>
    )
}

export default Admin