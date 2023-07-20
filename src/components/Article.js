import React from 'react'


export default ({title,date,preview}) => {
  return (
    <div>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
    </div>
  )
};
