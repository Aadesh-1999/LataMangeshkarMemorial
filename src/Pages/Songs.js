import React from 'react';
import {NavLink} from "react-router-dom";

export const Songs = () => {
  return (<div style={{height:"90vh"}} className="d-flex justify-content-center align-items-end">
      <div className='m-5'>
      <NavLink className='btn px-5 py-3 shadow border' to='/songs/marathi'>Marathi</NavLink>
      </div>
      <div className='m-5'>
      <NavLink className='btn px-5 py-3 shadow border' to='/songs/hindi'>Hindi</NavLink>
      </div>
  </div>);
};
