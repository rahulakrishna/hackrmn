"use client";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function getTLD(hostname) {
  const splitArray = hostname.split("/");
  const domain = splitArray[2];
  return domain;
}

const actions = [
  { label: "Flag" },
  { label: "Hide" },
  { label: (num) => `${num} comments` },
];

export default function StoryList({ type, stories }) {
  const pathname = window.location.pathname;

  const [currentStory, setCurrentStory] = useState(pathname.split("/")[3]);
  return (
    <div className="sticky top-8 min-h-screen max-h-screen overflow-y-scroll no-scrollbar">
      {stories.map((story) => (
        <div
          key={story.id}
          className={`border-b-2 border-r-8 border-b-gray-400 border-r-transparent dark:border-r-black pt-2 ${
            parseInt(currentStory, 10) === story.id &&
            "border-r-gray-400 rounded-br-md"
          }`}
        >
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <div className="flex flex-col align-middle justify-center">
                <button className="bg-gray-100 dark:bg-stone-900 hover:shadow-md hover:bg-gray-200 hover:dark:bg-stone-800 p-1 mr-2 rounded-md transition-all">
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className="w-4 h-4 text-stone-900 dark:text-gray-400"
                  />
                </button>
              </div>
              <div>
                <a href={story.url}>
                  <h1 className="font-bold hover:underline">{story.title}</h1>
                </a>
                <span className="text-gray-400 text-sm">
                  {story.user} | {story.points} points
                </span>
              </div>
            </div>
          </div>

          <div className="my-2 text-right">
            <div className="text-gray-300 text-sm mr-4 mb-2">
              <a href={getTLD(story.url)}>{getTLD(story.url)}</a>
            </div>
            {actions.map((action) => {
              if (typeof action.label === "function") {
                return (
                  <Link
                    href={`/${type}/comments/${story.id}`}
                    key={action.label}
                  >
                    <button
                      className={`bg-gray-50 dark:bg-stone-900 hover:bg-gray-100 hover:dark:bg-stone-800 ${
                        parseInt(currentStory, 10) === story.id &&
                        "bg-gray-200 dark:bg-gray-500 hover:dark:bg-gray-400 text-blue-500 dark:text-blue-400"
                      } text-sm p-1 px-2 mb-1 rounded-sm transition-all mr-2`}
                      onClick={() => setCurrentStory(story.id)}
                    >
                      {action.label(story.comments_count)}
                    </button>
                  </Link>
                );
              }
              return (
                <button
                  className="bg-gray-50 dark:bg-stone-900 hover:bg-gray-100 hover:dark:bg-stone-800 text-sm p-1 px-2 mb-1 rounded-sm transition-all mr-2"
                  key={action.label}
                >
                  {action.label}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
