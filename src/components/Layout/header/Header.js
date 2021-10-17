import React from 'react'
import classes from './Header.module.css'
import logo from '../../../asset/logo.svg'
import followers from '../../../asset/followers.svg'
import gems from '../../../asset/gems.png'
import avatar from '../../../asset/avatar.png'


function Header(props) {
       return (
              <header className ={classes.header}>
                     <div className ={classes.headerNav}>
                            <img src={logo} alt="logo" />
                     </div>
                     <div className ={classes.headerNavLeft}>
                            <span>
                                   <img src={followers} alt="followers" />
                                   <p>5.1k</p>
                            </span>
                            <span>
                                   <img src={gems} alt="gems" />
                                   <small>1.2k</small>
                            </span>
                     </div>
                     <div className={classes.headerMain}>
                            <p>{props.smallText}</p>
                            <h2>{props.largeText}</h2>            
                            <img src={avatar} alt="babe" />
                     </div>
              </header>
       )
}

export default React.memo(Header);
