import React from 'react'
import {post} from "./Data"

const Cards = ({post}) => {
  return (
    <div className=''>
        <div className=''>
            <img src={post.userImg} alt="" className=""/>
            <span>{post.userName}</span>
        </div>
    </div>
  )
}

export default Cards
