import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Chat({ messages, loading }) {
  return (
    <div className="flex-1 bg-gray-100 p-4 overflow-auto">
      {messages.map((msg, idx) => (
        <div key={idx} className="flex justify-end mb-2">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-md break-words">
            {msg.text}
            <div className="text-xs text-gray-200 text-right mt-1">
              {msg.time}
            </div>
          </div>
        </div>
      ))}
      {loading && (
        <div className="flex justify-end mb-2">
          <div className="bg-gray-300 text-gray-600 px-4 py-2 rounded-lg max-w-xs flex items-center">
            <span className="animate-spin mr-2">
              <FontAwesomeIcon icon={faHourglassHalf} />
            </span>
            Sending...
          </div>
        </div>
      )}
    </div>
  );
}
