import React from 'react'
import classes from './UserChat.module.css'

const UserChat = (props)  => {

       return (
              <React.Fragment>
                                          <div  className = {classes.userChat}>
                                                 <img src={props.image} alt="user" />
                                                 <div>
                                                        <p>{props.name}</p>
                                                        <p>{props.text}</p>
                                                 </div>
                                                 <span>
                                                        <p>{props.date}</p>
                                                 </span>
                                          </div>
                     
              </React.Fragment>

       )
}

export default React.memo( UserChat)
