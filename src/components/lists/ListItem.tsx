import React, { useState } from "react";

interface ListItemProps {
  label: string;
}

const ListItem: React.FC<ListItemProps> = ({ label }) => {
  const [value, setValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleBoxClick = () => {
    if (!isEditing) {
      setIsEditing(true);
    }
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <div className="w-28 h-[57px] relative">
      <div
        className={`w-[100.10px] h-[57px] left-0 top-0 absolute bg-contrast-500 rounded-lg ${
          isEditing ? "cursor-text" : "cursor-pointer"
        }`}
        onClick={handleBoxClick}
      >
        {isEditing ? (
          <input
            type="text"
            className="w-[100%] h-[100%] text-purpledull-100 text-base text-center font-medium leading-[24.96px] tracking-wide bg-transparent border-none focus:outline-none"
            value={value}
            onChange={handleValueChange}
            onBlur={handleBlur}
            autoFocus
          />
        ) : (
          <div className="absolute left-[8.85px] top-[18px] text-gray-400 text-base font-medium leading-[24.96px] tracking-wide">
            {label}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListItem;
