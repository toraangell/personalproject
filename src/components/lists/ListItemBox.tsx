import React, { useState } from "react";

interface ListItemBoxProps {
  label: string;
  value: string;
  placeholder: string;
}

const ListItemBox: React.FC<ListItemBoxProps> = ({
  label,
  value,
  placeholder,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(value);

  const handleBoxClick = () => {
    setIsEditing(true);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="mb-4">
      <div className="font-semibold mb-2">{label}</div>
      <div
        className={`bg-contrast-500 rounded-lg p-4 ${
          isEditing ? "cursor-text" : "cursor-pointer"
        }`}
        onClick={handleBoxClick}
      >
        {isEditing ? (
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            onBlur={() => setIsEditing(false)}
            className="bg-transparent border-none focus:outline-none w-full"
          />
        ) : (
          <div className={`text-white ${value === "" ? "opacity-50" : ""}`}>
            {text !== "" || isEditing ? text : placeholder}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListItemBox;
