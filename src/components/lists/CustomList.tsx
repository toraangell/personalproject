import React from "react";
import ListItem from "./ListItem";

interface CustomListProps {
  items: string[]; // Liste med props, f.eks. ["Distanse", "Tid", "Stigning", "Rep(s)", "Set(s)"]
}

const CustomList: React.FC<CustomListProps> = ({ items }) => {
  return (
    <div className="w-[613px] h-[79px] justify-start items-end inline-flex">
      <div className="h-[79px] justify-start items-end flex">
        {items.map((item) => (
          <ListItem key={item} label={item} />
        ))}
      </div>
    </div>
  );
};

export default CustomList;
