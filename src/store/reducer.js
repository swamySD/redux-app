import {createStore,combineReducers, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

const initialState={
    laoading:false,
    posts:[],
    error:null
}
const postsReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'PENDING':
            return {...state,loading:true}
            case 'SUCCESS':
            return {...state,loading:false,posts:action.payload}
            case 'FAILURE':
            return {...state,loading:false,error:action.payload}
         default:
         return state   
    }
}
const middleware=applyMiddleware(thunk,logger)
export const userReducer=function (state={},action){
    switch (action.type) {
        case 'USER_NAME':
            return {...state,name:action.payload}
            
            default:
                return state
        
    }
}

    export const ageReducer=(state={},action)=>{
        switch (action.type) {
            case 'USER_AGE':
                return {...state,age:action.payload}
            
            default:
            return state
        }
    }


export const ages=(age)=>{
    return{
    type:'USER_AGE',
    payload:age
    }
  }  

export const getPosts=()=>{
    return (dispatch)=>{
        dispatch({type:'PENDING'})
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => dispatch({type:'SUCCESS',payload:json}))
        .catch(error=>dispatch({type:'FAILURE',payload:error}))
    }
}



const reducers=combineReducers({
userDeails:userReducer,
userAge:ageReducer,
Posts:postsReducer
})


const store=createStore(reducers,middleware)

export default store

