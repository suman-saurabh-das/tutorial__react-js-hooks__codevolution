/* [12] [13] [14] Fetching data with useEffect() - Part-1, Part-2, Part-3 */

import React, { useState, useEffect } from 'react'
import Axios from 'axios'

// function DataFetching() {
//   const [posts, setPosts] = useState([])

//   useEffect(() => {
//     Axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(res => {
//         console.log(res.data);
//         setPosts(res.data);
//       })
//       .catch(err => console.log(err))
//   }, [])

//   return (
//     <>
//       <h3>List of Posts</h3>
//       <ul style={{ listStyle: "none" }}>
//         {posts.map(post => <li key={post.id}>{post.title}</li>)}
//       </ul>
//     </>
//   )
// }

// export default DataFetching

/*
    Tutorial - 1 - Data fetching using setState() and useEffect()

    1. If axios is not installed, then install axios using
        npm i axios (check package.json for version)
    2. Create a state variable initialized with an empty array to store the response.
    3. Create a useEffect() hook and pass an empty array as 2nd parameter to mimic componentDidMount() method.
    4. Inside useEffect() function, make a GET request using axios.
        .then() block will provide us the response, which we can store in the state variable.
        .catch() block will provide us info about any error.
    5. Create an unordered list and use map method to extract & display the data.
*/

// function DataFetching() {
//   const [post, setPost] = useState({})
//   const [id, setId] = useState(1)

//   useEffect(() => {
//     Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then(res => {
//         console.log(res.data);
//         setPost(res.data);
//       })
//       .catch(err => console.log(err))
//   }, [id])

//   return (
//     <>
//       <h3>Post with id : {id}</h3>
//       <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
//       <div>
//         <h4>{post.title}</h4>
//         <p>{post.body}</p>
//       </div>
//     </>
//   )
// }

// export default DataFetching

/*
  Tutorial -2 - Fetching Data from a specific endpoint using useEffect() hook

    For e.g. if we use the endpoint - https://jsonplaceholder.typicode.com/posts/1
    and change the number at the end, we will get different responses.

    1. Create an input element that will accept a post_id from the user.
    2. We are now fetching only one object, so we will initialize setState() with an empty object.
    3. We will have to modify the endpoint to fetch data based on value (post_id) entered by user.
    4. In useEffect(), we will use get method from axios to fetch the data.
      .then() block will provide us the response with a single object.
      .catch() block will provide us info about errors if any.
    5. Now we must add the id property to the dependency array inside the useEffect() otherwise react will not call the effect when id is entered by the user.
    6. After specifying the id in the dependency array of useEffect(), we will be able to fetch the desired data.
*/

function DataFetching() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromBtnClick, setIdFromBtnClick] = useState(1)

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
      .then(res => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch(err => console.log(err))
  }, [idFromBtnClick])

  const handleBtnClick = () => {
    setIdFromBtnClick(id)
  }

  return (
    <>
      <h3>Post with id : {idFromBtnClick}</h3>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleBtnClick}>Fetch Post</button>
      <div>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
    </>
  )
}

export default DataFetching

/*
  Tutorial 3 - Triggering the useEffect() hook an a button click

    Previously, whenever we were typing in the id, data was getting fetched at every change in input value.
    Now we would like to fetch data only when a button is clicked.
    Typically we would achieve this using a button and an onClick handler and fetch data in this handler.
    But the same can be achieved by useEffect() hook.

    1. Create a state variable, whose value will change only based on the button clicked.
    2. Now set this state variable only when the user clicks this button and use the same variable to fetch the post from the useEffect.
    3. Remove the id from dependency array and add the new state variable.
*/
