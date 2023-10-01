import React from 'react';
import { elastic as Menu } from 'react-burger-menu';


// https://www.digitalocean.com/community/tutorials/react-react-burger-menu-sidebar

export default props => {

  return (
    <Menu>
      <a className="menu-item fw-bold" href="/">
        <span className='btn btn-outline-light fw-bold'>
          Home
        </span>
      </a>

      <a className="menu-item fw-bold" href='/contactUs'>
        <span className='btn btn-outline-light fw-bold'>
          Contact us
        </span>
      </a>

      <a className="menu-item fw-bold" href='/Products'>
        <span className='btn btn-outline-light fw-bold'>
          Products
        </span>
      </a>


      <br />
      <a className=" menu-item " href='/loginpage'>
        <b className='btn btn-outline-light fw-bold'>
          Manage Acccount
        </b>


      </a>
    </Menu>
  );
};