import React from 'react'

export default ({image ,about}) => {
  return (
    <aside>
        <img src ={image}/>
        <p>{about}</p>
    </aside>
  )
}
