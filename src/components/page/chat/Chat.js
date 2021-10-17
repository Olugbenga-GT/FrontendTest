import React from 'react'
import classes from './Chat.module.css'
import UserChat from '../userchat/UserChat'
import folake from '../../../asset/folake.png'
import brandon from '../../../asset/brandon.png'
import solape from '../../../asset/solape.png'
import marcel from '../../../asset/marcel.png'
import Carousel, {slidesToShowPlugin} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import brandons from '../../../asset/brandons.png'
import mahbubs from '../../../asset/mahbubs.png'
import solapes from '../../../asset/solapes.png'
import ecllipse1 from '../../../asset/Ellipse1.png'
import ecllipse2 from '../../../asset/Ellipse2.png'



function Chat(props) {

       const userChatData = [
              {id:'user1', image:`${folake}`, name: 'Folake' , text: 'Hello everyone, my name is Folake; and I am so happy to be here' , date: '08:23'},
              {id:'user2' , image:`${brandon}` , name: 'Brandon' , text: 'Will definitely do Super, Thank you!' , date: 'Tue'},
              {id:'user3' , image:`${solape}`, name: 'Sholape' , text: 'Uploaded another picture. Like and Follow. I follow back' , date: 'Sun'},
              {id:'user4' , image:`${marcel}`, name: 'Marcel' , text: 'Here is another post if you would like to engage' , date: '23 Sept'},
       ]

       const ecllipses = [
              {id: 'e1' , image: `${ecllipse1}`},
              {id: 'e2' , image: `${ecllipse2}`},
              {id: 'e3' , image: `${ecllipse2}`},
              {id: 'e4' , image: `${ecllipse2}`},
              {id: 'e5' , image: `${ecllipse2}`},
              {id: 'e6' , image: `${ecllipse2}`},
              {id: 'e7' , image: `${ecllipse2}`},
              {id: 'e8' , image: `${ecllipse2}`},
              {id: 'e9' , image: `${ecllipse2}`},
              {id: 'e10' , image: `${ecllipse2}`},
              {id: 'e11' , image: `${ecllipse2}`},
              {id: 'e12' , image: `${ecllipse2}`},
              {id: 'e11' , image: `${ecllipse2}`},
              {id: 'e14' , image: `${ecllipse2}`},
       ]

       return (
              <section className = {classes.chat}>
                     <div className={classes.chatTop}>
                            <h2>Active Spaces</h2>
                            <Carousel
                                   plugins={[
                                   'centered',
                                   'infinite',
                                   // 'arrows',
                                   {
                                          resolve: slidesToShowPlugin,
                                          options: {
                                                 numberOfSlides: 3,
                                          },
                                   },
                                   ]} 
                                   className ={classes.slider}
                                   >  
                                          <img src={mahbubs} alt="user" />
                                          <img src={solapes} alt="user" />
                                          <img src={brandons} alt="user" />
                                          <img src={solapes} alt="user" />
                                          <img src={mahbubs} alt="user" />
                                          <img src={brandons} alt="user" />
                                   </Carousel>
  
 
                     </div>
                     <div className={classes.chatBottom}>
                            <h2>Recents</h2>
                            <div className = {classes.dot}>
                                   {ecllipses.map((ecllipse) =>  <img key = {ecllipse.id} src={ecllipse.image} alt="img" /> )}
                            </div>

                     {
                            userChatData.map((user) => <UserChat key={user.id}  name = {user.name} image = {user.image} date = {user.date} text = {user.text}/>)
                     }
                     </div>    
             </section>
       )
}

export default Chat
