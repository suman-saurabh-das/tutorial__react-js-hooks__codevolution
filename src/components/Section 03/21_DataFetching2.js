/* [24] Fetching data with useReducer */

import React, { useReducer, useEffect } from 'react'
import Axios from 'axios'

function DataFetching2() {
  const initialState = {
    loading: true,
    post: {},
    errorMsg: ''
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS': return { loading: false, post: action.payload, errorMsg: '' }
      case 'FETCH_FAILURE': return { loading: false, post: {}, errorMsg: 'Something went wrong !' }
      default : return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => dispatch({type: 'FETCH_SUCCESS', payload: res.data}))
    .catch(err => dispatch({type: 'FETCH_FAILURE'}))
  }, [])

  return (
    <div>
      {state.loading ? <h4>Loading...</h4> : <p>{state.post.title}</p>}
      {state.errorMsg ? <h4>{state.errorMsg}</h4> : null}
    </div>
  )
}

export default DataFetching2

/*
    Steps to fetch data using useReducer
    • Make the necessary imports. (useReducer, useEffect, axios)
    • Declare initialState and define the reducer function.
    • Invoke useEffect and useReducer to fetch the data and set the state.
    • Specify the JSX.
    
    Fetching data using useEffect and setting states using useReducer hook.
    On replacing the useState with useReducer, we have grouped related state variables together and the state transitions are also grouped together.
*/
