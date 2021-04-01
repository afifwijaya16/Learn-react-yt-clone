import React, { useEffect } from "react";
import "./_comments.scss";
import Comment from "../comment/Comment";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsOfVideoById } from "../../redux/actions/comment.action";
const Comments = ({ videoId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [dispatch, videoId]);

  const comments = useSelector((state) => state.commentList.comments);

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );
  const handleComment = () => {
    //
  };
  return (
    <div className="comments">
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
        {_comments?.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
