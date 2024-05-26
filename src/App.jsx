import { useState } from 'react'
import './App.css'
import Comments from './Comments';

function App() {

  const [comments, setComments] = useState([
    {
      text: "Comment 1",
      replies: [
        {
          text: "Comment 2",
          replies: []
        }
      ]
    }
  ]);

  return (
    <>
    {
      comments.map(comment => {
        return <Comments comment={comment} handleReply={() => console.log("hello")}/>
      })
    }
      
    </>
  )
}

export default App
