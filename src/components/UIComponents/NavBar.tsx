import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface NavBarProps {
  pageTitle: string;
}

export default function NavBar({ pageTitle }: NavBarProps) {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 text-purpledull-200">
      <div className="w-9 h-9">
        <div className="" onClick={goToHome}>
          <ArrowLeft />
        </div>
      </div>
      <div className="mr-10 text-purpledull-400">{pageTitle}</div>
    </header>
  );
}
