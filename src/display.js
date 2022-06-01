import React from "react";
import { useState, useEffect } from "react";
import {
    getComments as getCommentsApi,
    createComment as createCommentApi,
  } from "./api";
import Post from "./post.js";
import Comment from "./comment.js";

const Display = ({currentUserId}) => {
    const [backendComments, setBackendComments] = useState([])
    const [activeComment, setActiveComment] = useState(null)
    const rootComments = backendComments.filter(
        (backendComment) => backendComment.parentId === null

    )
    const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
  const addComment = (text, pseudonym, parentId) => {
      console.log("addcomment", text, pseudonym, parentId)
       createCommentApi(text, pseudonym, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

    return (
        <div className="comments">
          <Post handleSubmit={addComment}/>
          <div className="comments-container">
            {rootComments.map((rootComment) => (
              <Comment
                key={rootComment.id}
                comment={rootComment}
                replies={getReplies(rootComment.id)}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                addComment={addComment}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        </div>
      );
    };
    

export default Display