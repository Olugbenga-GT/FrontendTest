import React from 'react'
import Footer from '../../components/Layout/footer/Footer'
import Header from '../../components/Layout/header/Header'
import GroupChat from '../../components/page/groupie/GroupChat'
import './group.css'

function Group() {

       return (
              <div>
                     <Header smallText = "Lase's Space"  largeText= 'Lukaku:King Or Not' />
                     <GroupChat/>
                     <Footer/>
              </div>
       )
}

export default Group
