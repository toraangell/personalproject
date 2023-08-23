import React, { FC, ChangeEvent } from "react";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type SvgIconComponent = typeof ChevronRight;
interface SettingsListItemProps {
  enabled?: boolean;
  id?: string;
  label: string;
  value?: string;
  Icon?: SvgIconComponent;
  chevronType?: "right" | "down" | "up";
  onClick?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}
const SettingsListItem: FC<SettingsListItemProps> = ({
  label,
  value,
  chevronType = "right", // Default to right chevron
  Icon,
  onClick,
  onChange,
  children,
  enabled,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div
        className={`flex justify-between items-center py-3 px-4 cursor-pointer ${
          onClick || children ? "hover:bg-contrast-500" : ""
        }`}
        onClick={() => {
          if (onClick) {
            onClick();
          }
          if (chevronType === "down") {
            handleToggleExpand();
          }
        }}
      >
        <div className="flex items-center">
          {Icon && <Icon className="mr-2 w-5 h-5" />}
          <div>
            <div className="font-semibold">{label}</div>
            {onChange ? (
              <input
                type="text"
                value={value as string}
                onChange={onChange}
                className="text-gray-600"
              />
            ) : (
              <div className="text-gray-600">{value}</div>
            )}
          </div>
        </div>
        {chevronType === "right" ? (
          expanded ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-500" />
          )
        ) : expanded ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </div>

      {expanded && enabled && <div className="pl-8 pt-2">{children}</div>}
    </div>
  );
};

export default SettingsListItem;
