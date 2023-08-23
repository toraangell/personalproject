import React, { useState } from "react";

interface LineSchemaProps {
  placeholder: string;
}

const ListItemLine: React.FC<LineSchemaProps> = ({ placeholder }) => {
  const [text, setText] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="flex items-center w-full border-b border-purpledull-500 px-6">
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        className="w-full bg-transparent border-none focus:outline-none text-center text-lg"
        placeholder={placeholder}
      />
    </div>
  );
};

export default ListItemLine;
