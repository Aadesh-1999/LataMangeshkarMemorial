import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

export const Songs = () => {
  return (<div style={{minHeight:"100vh"}} className="d-flex justify-content-center align-items-start row">
    <div className="col-12 row d-flex justify-content-center">
      <div className='my-5 col d-flex justify-content-center'>
        <NavLink className='btn px-5 py-3 shadow border' to='/songs/marathi'>Marathi</NavLink>
      </div>
      <div className='my-5 col d-flex justify-content-center'>
        <NavLink className='btn px-5 py-3 shadow border' to='/songs/hindi'>Hindi</NavLink>
      </div>
    </div>
    <div className='col-12 d-flex justify-content-center'>
      <Outlet />
    </div>
  </div>);
};
