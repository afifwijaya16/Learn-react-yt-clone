import React from "react";
import "./_comments.scss";
import Comment from "../comment/Comment";
const Comments = () => {
  const handleComment = () => {
    //
  };
  return (
    <div className="comments">
      <p>12345 Coment </p>
      <div className="comments__form d-flex w-100 my-2">
        <img
          src="https://www.shareicon.net/data/256x256/2016/09/15/829459_man_512x512.png"
          alt="avatar"
          className="rounded-circle mr-2"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment..."
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {[...Array(5)].map((index) => (
          <Comment />
        ))}
      </div>
    </div>
  );
};

export default Comments;