import React from 'react'
import classes from './GroupChat.module.css'
import question from '../../../asset/question.png'
import lukaku from '../../../asset/lukaku.png'
import arrowdown from '../../../asset/arrowdown.png'
import times from '../../../asset/times.png'
import roll1 from '../../../asset/roll1.png'
import roll2 from '../../../asset/roll2.png'
import roll3 from '../../../asset/roll3.png'
import roll4 from '../../../asset/roll4.png'
import roll5 from '../../../asset/roll5.png'
import roll6 from '../../../asset/roll6.png'
import roll7 from '../../../asset/roll7.png'
import minmarcel from '../../../asset/minmarcel.png'
import minsolape from '../../../asset/minsolape.png'
import minroll2 from '../../../asset/minroll2.png'
import Sent from '../sent/Sent'
import Received from '../received/Received'
import Input from '../../UI/input/Input'


function GroupChat(props) {
       const groupmembers = [
              {id: 'roll1' , image : `${roll1}`},
              {id: 'roll2' , image : `${roll2}`},
              {id: 'roll3' , image : `${roll3}`},
              {id: 'roll4' , image : `${roll4}`},
              {id: 'roll5' , image : `${roll5}`},
              {id: 'roll6' , image : `${roll6}`},
              {id: 'roll7' , image : `${roll7}`},
       
       ]
       return (
              <section className ={classes.groupchat}>
                     <div className={classes.invite}>
                            <img src={question} alt="invite someone" />
                             <p>invite <br />  someone</p>
                     </div>
                     <div className={classes.rolls}>
                            <div>{groupmembers.map((groupie) => <img src={groupie.image} key ={groupie.id}alt="member" /> )}</div>
                            <p>Today 6:34 PM</p>
                     </div>
                     <div className ={classes.chats}>
                            <Sent text = "Anybody here loving Lukaku's Form ?" image={minroll2} />
                            <Sent text = "He's in a terrible form @Harold, hope say you no bet on top that guy ?"  image = {minmarcel} />
                            <div className = {classes.download}>
                                   <img src={times} alt="" />
                                   <img src={arrowdown} alt="" />
                                   <img src={lukaku} alt="" />
                            </div>
                            < div style= {{clear:'both'}}></div>
                            <Received text = "Peep my GOAT'S jubilation style, classic stuff"/>
                                   <small style ={{color: '#ed1c24' , float:'left' , paddingBottom: '1rem'}}>Folake Joined</small>                 
                                   < div style= {{clear:'both'}}></div>
                            <Sent  text = "Hello everyone, I'm Folake " image = {minsolape} />
                            <Input/>

                     </div>
              </section>
       )
}

export default React.memo(GroupChat);

