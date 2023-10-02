import React from 'react';
import { elastic as Menu } from 'react-burger-menu';


// https://www.digitalocean.com/community/tutorials/react-react-burger-menu-sidebar

export default props => {

  return (
    <Menu>
      <a className="menu-item fw-bold" href="/">
        <b className='btn btn-outline-light fw-bold'>
          Home
        </b>
      </a>

      <a className="menu-item fw-bold" href='/contactUs'>
        <b className='btn btn-outline-light fw-bold'>
          Contact us
        </b>
      </a>

      <a className="menu-item fw-bold" href='/Products'>
        <b className='btn btn-outline-light fw-bold'>
          Products
        </b>
      </a>

      <hr />
      <a className=" menu-item " href='/loginpage'>
        <b className='btn btn-outline-light fw-bold'>
          Manage Acccount
        </b>


      </a>
    </Menu>
  );
};