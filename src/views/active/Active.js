import React from 'react'
import Footer from '../../components/Layout/footer/Footer'
import Header from '../../components/Layout/header/Header'
import Chat from '../../components/page/chat/Chat'

function Active() {
       return (
              <div>
                     <Header smallText = "Chat with frends in"  largeText = "Spaces" />
                     <Chat/>
                     <Footer/>
              </div>
       )
}

export default Active
