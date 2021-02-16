import React from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/Il-KQuqR_Po/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEmhp5PIiS7ADQr-I9wSsqiz8h_Q"
          alt="video thumb"
        />
        <span>05:43</span>
      </div>
      <div className="video__title">Create app in 5 minutes #made by Afif</div>
      <div className="video__details">
        <span>
          <AiFillEye /> 5m views •
        </span>
        <span> 5 days ago</span>
      </div>
      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/ytc/AAUvwnhlDmcQupMcbOxt_iGveFakB5aNBxzu7P9oX7qVXw=s176-c-k-c0x00ffffff-no-rj-mo"
          alt="avatar"
        />
        <p>Afif Wijaya</p>
      </div>
    </div>
  );
};

export default Video;
