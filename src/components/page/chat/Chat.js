import React from 'react'
import classes from './Chat.module.css'
import UserChat from '../userchat/UserChat'
import folake from '../../../asset/folake.png'
import brandon from '../../../asset/brandon.png'
import solape from '../../../asset/solape.png'
import marcel from '../../../asset/marcel.png'
import guy1 from '../../../asset/guy1.png'
import guy2 from '../../../asset/guy2.png'
import guy3 from '../../../asset/guy3.png'

function Chat(props) {

       const userChatData = [
              {id:'user1', image:`${folake}`, name: 'Folake' , text: 'Hello everyone, my name is Folake; and I am so happy to be here' , date: '08:23'},
              {id:'user2' , image:`${brandon}` , name: 'Brandon' , text: 'Will definitely do Super, Thank you!' , date: 'Tue'},
              {id:'user3' , image:`${solape}`, name: 'Sholape' , text: 'Uploaded another picture. Like and Follow. I follow back' , date: 'Sun'},
              {id:'user4' , image:`${marcel}`, name: 'Marcel' , text: 'Here is another post if you would like to engage' , date: '23 Sept'},
       ]

       return (
              <section className = {classes.chat}>
                     <div className={classes.chatTop}>
                            <h2>Active Spaces</h2>
  
 
                     </div>
                     <div className={classes.chatBottom}>
                            <h2>Recents</h2>
                            <div>
                            {[...Array(14)].map((i) => <span key ={i}></span>)}

                            </div>

                     {
                            userChatData.map((user) => <UserChat key={user.id}  name = {user.name} image = {user.image} date = {user.date} text = {user.text}/>)
                     }
                     </div>    
             </section>
       )
}

export default Chat
