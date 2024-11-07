import React from 'react';
import { HeartIcon, ChatAltIcon, BookmarkIcon } from '@heroicons/react/outline'; // Correct icon names for v1

const BlogCard = ({ title, description, imageUrl, author, date }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-xs mx-auto">
      {/* Image remains at the top */}
      <img className="w-full h-40 object-cover" src={imageUrl} alt={title} />

      {/* Card content is restricted to a fixed height for consistency */}
      <div className="p-4 h-56 flex flex-col justify-between">
        {/* Title and Description */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="mt-2 text-gray-600 text-sm line-clamp-3">
            {description}
          </p>
        </div>

        {/* Author and Date */}
        <div className="mt-4 flex items-center justify-between text-gray-500 text-xs">
          <span>{author}</span>
          <span>{date}</span>
        </div>

        {/* Icons for likes, comments, and bookmark */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Likes icon */}
            <div className="flex items-center space-x-1 text-gray-500">
              <HeartIcon className="h-5 w-5" />
              <span className="text-xs">120</span>
            </div>
            {/* Comments icon */}
            <div className="flex items-center space-x-1 text-gray-500">
              <ChatAltIcon className="h-5 w-5" />
              <span className="text-xs">45</span>
            </div>
          </div>
          {/* Bookmark icon */}
          <BookmarkIcon className="h-5 w-5 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
 