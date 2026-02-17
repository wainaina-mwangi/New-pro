import React,{useState} from 'react'

function ConditionalRendering() {
    const[unreadMessages,setUnredMessages]=useState(['a' + 'b'])
  return (
    <div>
       {unreadMessages.length > 0 && <p>you have {unreadMessages.length} unread messages</p>} 
    </div>
  )
}

export default ConditionalRendering