import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../logo/logo";
import AccountIcon from "../icons/AccountIcon";

export default function HomePageToolBar() {
  const navigate = useNavigate();

  const goToAccount = () => {
    navigate("/Account");
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 text-purple-950">
      <div className="w-9 h-9">
        <Logo />
      </div>
      <div className="w-9 h-9">
        <div className="" onClick={goToAccount}>
          <AccountIcon />
        </div>
      </div>
    </header>
  );
}
