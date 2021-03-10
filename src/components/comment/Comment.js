import React from "react";
import moment from "moment";
import "./_comment.scss";
const Comment = () => {
  return (
    <div className="comment p-2 d-flex">
      <img
        src="https://www.shareicon.net/data/256x256/2016/09/15/829459_man_512x512.png"
        alt="avatar"
        className="rounded-circle mr-3"
      />
      <div className="comment__body">
        <p className="comment__header mb-1">
          Omega • {moment("2021-02-02").fromNow()}
        </p>
        <p className="mb-0">Nice Video Dude</p>
      </div>
    </div>
  );
};

export default Comment;
