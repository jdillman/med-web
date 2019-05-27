import React, { useState } from 'react';
import Header from '../core/Header';
import NavDrawer from '../core/NavDrawer';


export default function View({ children }) {
  const [navOpen, setNavOpen] = useState(false);

  const toggleDrawer = () => {
    setNavOpen(!navOpen);
  }

  return (
    <React.Fragment>
      <Header toggleDrawer={toggleDrawer} />
      <NavDrawer onClose={toggleDrawer} open={navOpen} />
      <main>
        Main content
        { children }
      </main>
    </React.Fragment>
  );
}
