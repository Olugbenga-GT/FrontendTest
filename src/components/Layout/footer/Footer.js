import React from 'react'
import classes from './Footer.module.css'
import community from '../../../asset/community.svg'
import hot from '../../../asset/hot.svg'
import bag from '../../../asset/bag.svg'
import icon from '../../../asset/icon.svg'
import notification from '../../../asset/notification.png'

function Footer() {

       const footerData = [ 
              { id:'img1' , image:`${hot}`},
              { id:'img2' , image:`${community}`},
              { id:'img3' , image:`${icon}`},
              { id:'img4' , image:`${bag}`},
              { id:'img5' , image:`${notification}`},
       ]

       return (
              <footer className={classes.footer}>
                     <div className={classes.footerContainer}>
                            {
                                   footerData.map((footerDatum) => 
                                   <span key ={footerDatum.id}>
                                          <img src={footerDatum.image} alt="footer-icon" />
                                   </span>)
                            }
                     </div>
              </footer>
       )
}

export default React.memo(Footer);
