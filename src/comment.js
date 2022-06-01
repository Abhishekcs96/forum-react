import Post from "./post";
import { useState } from "react";
const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {
  const [postpopup, Setpostpopup] = useState(false)  
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const canReply = Boolean(currentUserId);
  const replyId = parentId ? parentId : comment.id;
  return (
    <div key={comment.id} className="comment">
      <div className="comment-image-container">
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div className="comment-body">{comment.body}</div>
        </div>
        <div className="comment-actions">
          {canReply && (
            <div
              className="comment-action"
              onClick={() =>
              Setpostpopup(true)
              }
            >
              Reply
            </div>
          )
          }
          <Post trigger = {postpopup}> 
          </Post>
        </div>
        {isReplying && (
          <Post submitLabel="Reply"
          handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                addComment={addComment}
                parentId={comment.id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;