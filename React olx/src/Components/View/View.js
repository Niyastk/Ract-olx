import React, { useEffect, useContext, useState } from 'react'
import { FirebaseContext } from '../../store/Context'
import { PostContext } from '../../store/PostContext'

import './View.css'
function View () {
  const [userDetails, setUserDetails] = useState()
  const { postDetails } = useContext(PostContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    const { userId } = postDetails
    console.log("user id :",userId)
    firebase.firestore().collection('users').where('id', '==', userId).get().then((res) => {
        res.docs.forEach(docs =>{
          setUserDetails(docs.data())
        });
     
      })
  }, [])
  console.log("this",userDetails)
  return (
    <div className='viewParentDiv'>
      <div className='imageShowDiv'>
        <img src={postDetails ?  postDetails.url:""} alt='' />
      </div>
      <div className='rightSection'>
        <div className='productDetails'>
          <p>&#x20B9; {postDetails ?  postDetails.price:""} </p>
          <span>{postDetails ? postDetails.name:""}</span>

          <span>Tue May 04 2021</span>
        </div>
        {userDetails && <div className='contactDetails'>
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>}
      </div>
    </div>
  )
}
export default View
