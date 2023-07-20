import React from 'react'
import blogData from '../data/blog'
import Article from './Article'

export default () => {
    const articlelist = blogData.posts.map((item)=> {
       return(
        <Article key={item.id} title={item.title} date ={item.date} preview={item.preview} />
       )
    })
  return (
   <main>
    {articlelist}
   </main>
  )
}
