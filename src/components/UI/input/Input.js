import React from 'react'
import smiley from '../../../asset/smiley.png'
import camera from '../../../asset/camera.png'
import send from '../../../asset/send.png'
import classes from './Input.module.css'

function Input() {
       return (

              <div className = {classes.input}>
                     <span>
                            <img src={smiley} alt="smiley" />
                            <input type="text" placeholder = 'Leave a comment' />
                     </span>
                     <span>
                            <img src={camera} alt="cam" />
                            <img src={send} alt="send" />
                     </span>
              </div>
       )
}

export default Input
