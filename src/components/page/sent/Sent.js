import React from 'react'
import classes from './Sent.module.css'

function Sent(props) {

       return (
              <>
                     <div className = {classes.sent}>
                            <div>
                                   {props.text}
                            </div>
                            <img src={props.image} alt="sent" />
                     </div>
              <      div style= {{clear:'both'}}></div>
              </>
       )
}

export default React.memo(Sent)
