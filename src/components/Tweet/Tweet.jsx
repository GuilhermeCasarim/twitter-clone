import { faChartBar, faComment, faEllipsisH, faHeart, faRetweet, faUpload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export const Tweet = ({ tweet }) => {

  const [comments, setComments] = useState(0)
  const [retweets, setRetweets] = useState(0)
  const [likes, setLikes] = useState(0)

  const handleAction = (action) => {
    switch (action) {
      case 'comment':
        setComments(comments + 1)
        break;
      case 'retweet':
        setRetweets(retweets + 1)
        break;
      case 'like':
        setLikes(likes + 1)
        break;
      default:
        break;
    }
  }

  const CommentActions = ({ icon, action, text }) => (
    <div className="flex items-center cursor-pointer hover:text-blue-400 transition duration-300">
      <FontAwesomeIcon icon={icon} onClick={() => handleAction(action)} />
      <span className="ml-2">{text}</span>
    </div>
  )
  // parenteses ou chaves

  return (
    <div className="border-b border-gray-800 p-4 hover:bg-gray-800 transition duration-300">
      <div className="flex justify-between">
        <div className="flex space-x-3 justify-between">
          <img src={tweet.avatar} alt="avatar_user" className="rounded-full w-12 h-12 " />
          <span className="font-bold">{tweet.name}</span>
          <span className="text-gray-500 ml-2">{`@${tweet.username}`}</span>
          <span className="text-gray-500 ml-2">{`${tweet.time} PM`}</span>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
        
        
      </div>
      <div className="content overflow-hidden" style={{marginTop: '-20px', marginLeft: '3.72rem'}}>
        <p>{tweet.content}</p>
      </div>
      {tweet.image && <div className="mt-3 justify-center ml-14">
        <img className="rounded max-w-full" src={tweet.image} alt="img_user" />
      </div>}
      <div className="flex justify-evenly text-gray-500 mt-4 p-1">
        <CommentActions icon={faComment} action='comment' text={comments} />
        <CommentActions icon={faRetweet} action='retweet' text={retweets} />
        <CommentActions icon={faHeart} action='like' text={likes} />
        <CommentActions icon={faChartBar} action='' />
        <CommentActions icon={faUpload} action='' />
      </div>

    </div>


  )
}

{/* <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold">{tweet.name}</span>
            <span className="text-gray-500 ml-2">{tweet.username}</span>
            <span className="text-gray-500 ml-2">{tweet.time}</span>
          </div>
          <FontAwesomeIcon icon={faEllipsisH}/>
        </div>
      </div> */}
