import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface NavBarProps {
  pageTitle: string;
}

export default function NavBar({ pageTitle }: NavBarProps) {
  const navigate = useNavigate();
  const [lightMode, setLightMode] = useState(false); // Legg til state-variabel

  const toggleLightMode = () => {
    setLightMode((prevMode) => !prevMode);
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <header
      className={`flex items-center justify-between px-4 py-2 text-contrast-200 ${
        lightMode ? "bg-contrast-light-50" : "bg-contrast-500-dark"
      }`}
    >
      <div className="w-9 h-9">
        <div className="" onClick={goToHome}>
          <ArrowLeft />
        </div>
      </div>
      <div className="mr-10 text-purpledull-400">{pageTitle}</div>
    </header>
  );
}
