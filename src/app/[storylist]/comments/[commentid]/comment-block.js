"use client";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faArrowUp,
  faReply,
  faMultiply,
} from "@fortawesome/free-solid-svg-icons";

export default function CommentBlock({ comment, level = 0 }) {
  const [hide, setHide] = useState(false);
  const [showReply, setShowReply] = useState(false);
  return (
    <div
      key={comment.id}
      className={`ml-${
        comment.level + 10
      } pl-2 mb-3 pb-3 border-solid border-0 border-b-2 border-l-2 border-gray-200 dark:border-stone-800`}
    >
      <div className="text-sm text-gray-300 flex justify-start items-center">
        <button onClick={() => setHide(!hide)}>
          <FontAwesomeIcon
            icon={hide ? faPlus : faMinus}
            className="w-4 h-4 mr-1 text-gray-400 border-solid border-2 border-gray-400 rounded-md  flex justify-center items-center"
            size="sm"
          />
        </button>
        {comment.user} {comment.time_ago}
      </div>
      {!hide && (
        <div className="flex flex-col">
          <div
            dangerouslySetInnerHTML={{ __html: comment.content }}
            className="border-solid"
          />
          <div className="flex flex-row justify-start">
            <button className="dark:bg-stone-900 hover:dark:bg-stone-700 px-4 py-1 rounded-sm mt-2 mb-2 text-sm transition-all mr-2">
              <FontAwesomeIcon icon={faArrowUp} /> Upvote
            </button>
            <button
              className="dark:bg-stone-900 hover:dark:bg-stone-700 px-4 py-1 rounded-sm mt-2 mb-2 text-sm transition-all"
              onClick={() => setShowReply(!showReply)}
            >
              <FontAwesomeIcon icon={faReply} /> Reply
            </button>
          </div>
          <div
            className={`flex flex-col ${
              showReply ? "h-32 visible" : "h-0 hidden"
            } transition-all-1s`}
          >
            <textarea
              className={`bg-stone-700 mb-4 p-2 rounded-md h-24`}
              placeholder={`reply to ${comment.user}`}
            ></textarea>
            <div className="flex flex-row justify-start">
              <button
                className="dark:bg-stone-900 hover:dark:bg-stone-700 px-4 py-1 rounded-sm mt-2 mb-2 text-sm transition-all mr-2"
                onClick={() => setShowReply(!showReply)}
              >
                Comment
              </button>
              <button
                className="dark:bg-stone-900 hover:dark:bg-stone-700 px-4 py-1 rounded-sm mt-2 mb-2 text-sm transition-all"
                onClick={() => setShowReply(false)}
              >
                Cancel
              </button>
            </div>
          </div>
          {parseChildComments(comment.comments)}
        </div>
      )}
    </div>
  );
}

const parseChildComments = (comments) => {
  return comments.map((comment) => {
    return (
      <>
        <CommentBlock comment={comment} level={comment.level} />
        {parseChildComments(comment.comments)}
      </>
    );
  });
};
