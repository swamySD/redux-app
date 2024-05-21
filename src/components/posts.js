import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Audio } from 'react-loader-spinner'
import { getPosts } from '../store/reducer'
const Posts = () => {

const dispatch=useDispatch()
const {posts,loading,error}=useSelector(state=>state.Posts)
// console.log(postsData)
    useEffect(()=>{
    //  dispatch({type:'PENDING'})
    //  fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(json => dispatch({type:'SUCCESS',payload:json}))
    //   .catch(error=>dispatch({type:'FAILURE',payload:error}))
    dispatch(getPosts())
},[])
console.log(error)
 

  return (
    <div>
      
   {loading&&(<Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        // wrapperStyle
        // wrapperClass
      />)}
    {posts.map(post=>
        (<div key={post.id}>
             <h1 style={{fontSize:'10px'}}>{post.title}</h1>
            </div>
        ))}
    {error&& <p>error</p>}
    </div>
  )
}

export default Posts