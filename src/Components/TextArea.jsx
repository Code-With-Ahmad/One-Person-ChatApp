import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
export default function TextArea({ formAction }) {
  return (
    <form
      action={formAction}
      className="p-4 border-t flex items-center space-x-2"
    >
      <input
        name="text"
        type="text"
        className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type a message..."
      />
      <button
        type="submit"
        className="text-blue-600 hover:text-blue-800 text-2xl"
      >
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </form>
  );
}
