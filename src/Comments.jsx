import { useState } from 'react';
import './Comments.css'

export default function Comments({comment, handleReply}) {

    const [showInput, setShowInput] = useState(false);
    const [inputText, setInputText] = useState("");
    const [currentComment, setCurrentComment] = useState(comment)

    const handleSubmit = () => {
        if(!inputText.length) return;

        let newReplies = currentComment.replies;
        newReplies.push( {
            text: inputText,
            replies: []
        })
        console.log(newReplies)

        setCurrentComment(prev => ({...prev, replies: newReplies}))
        setShowInput(false);
        setInputText("");
    }

    return (
        <div className='comment-thread'>
            <div className='comment-container'>
                <div className='comment-text'>
                    {currentComment.text}
                </div>
                {
                    showInput ? 
                    <div className='reply-container'>
                        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />   
                        <button type='submit' onClick={() => handleSubmit()}>Submit</button>
                    </div>: 
                    <div className='comment-reply' onClick={() => setShowInput(true)}>
                        Add a Reply
                    </div>
                }
                
            </div>
            {
                currentComment.replies.map(comment => {
                    return <Comments comment={comment} />
                })
            }
        </div>
    )
}