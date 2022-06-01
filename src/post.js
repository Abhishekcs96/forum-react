import React from "react";
import './post.css'
import { useState  } from "react";
const Post = (props, {handleSubmit}
  ) => {
    const [text, setText] = useState("");
    const [pseudonym, setpseudonym] = useState("")
    const isTextareaDisabled = text.length === 0;
    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(text, pseudonym);
        console.log(handleSubmit)
        setText("");
      };
    
    return(props.trigger) ? (
        <div class="h-60 p-5 text-black" id="jumbotron1">
          <div className="Writepost">
              
              <textarea className="placeholder" placeholder="Write your post..." onChange={(e)=> setText(e.target.value)}/>
          </div>
          <div className="pseudonym">
              
              <input className="placeholder1" value={pseudonym} placeholder="Enter your pseudonym" onChange={(e)=> setpseudonym(e.target.value)}/>
          </div>
          <div className="buttons">
          <button class="btn btn-outline-Dark" id="buttonintitle" type="button" onClick={onSubmit} disabled={isTextareaDisabled}>
              Post
              {props.children}
         </button>  
         </div>
         </div>
    ): "";
}

export default Post