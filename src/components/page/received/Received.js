import React from 'react'
import classes from './Received.module.css'

function Received(props) {
       return (
              <>
                     <div className={classes.receive}>
                            <p>{props.text}</p>
                     </div>
                     <div style= {{clear:'both'}}></div>
              </>
       )
}

export default React.memo(Received)
