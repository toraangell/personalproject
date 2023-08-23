import React from "react";
import { PlusCircle } from "lucide-react";

interface NestedListItemAddProps {
  label: string;
  onClick?: () => void;
}

const NestedListItemAdd: React.FC<NestedListItemAddProps> = ({
  label,
  onClick,
}) => {
  return (
    <div
      className="flex items-center cursor-pointer text-dust-500"
      onClick={onClick}
    >
      <div className="mr-2">
        <PlusCircle size={24} />
      </div>
      <div>{label}</div>
    </div>
  );
};

export default NestedListItemAdd;
