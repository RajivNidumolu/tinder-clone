import React from 'react'

import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from "@material-ui/icons/Forum";


function Header() {

  return (
    <div className="header">
       

       <IconButton>
       <PersonIcon fontSize='large' className='header__icon'/>
       </IconButton>

       <img
       className='header__logo' src='https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg' alt='nothing to show'
       />
        <IconButton>
       <ForumIcon fontSize='large' className='header__icon'/>
       </IconButton>
    </div>
  );
}

export default Header;