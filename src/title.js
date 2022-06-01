import React, { useState } from "react";
import './title.css';
import Post from "./post";


const Title = () => {
    const [postpopup, Setpostpopup] = useState(false)
    return(
        <div class="h-100 p-5 text-white" id="jumbotron">
          <h2>Maths For 'em</h2>
          <button class="btn btn-outline-light" id="buttonintitle" type="button" onClick={()=>Setpostpopup(true)}>
              New Post
          </button>
          <button class="btn btn-outline-light" id="buttonintitle" type="button" onClick={()=>Setpostpopup(false)}>
             Close
          </button>
          <Post trigger = {postpopup}> 
          </Post>

        </div>
    )
}

export default Title