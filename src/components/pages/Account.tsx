//Package dependencies
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React, { FC } from "react";
import { isMobile } from "react-device-detect";

//Local dependencies
import NavBar from "../UIComponents/NavBar";
import { Sun, Moon, LockIcon } from "lucide-react";
import SettingsListItem from "../lists/ListComponent";
import { useTranslation } from "react-i18next";

const Account: React.FC = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("dark");
  const { t } = useTranslation();
  const [editedName, setEditedName] = useState(t("bruker.navn"));

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(event.target.value);
  };

  return (
    <div className="max-w-md mx-auto">
      <NavBar pageTitle="Brukerinnstillinger" />

      <h1>App Mode</h1>

      <button
        className="bg-purple-500 hover:bg-purple-300 mt-2 text-purple-50 font-bold rounded-3xl py-2 px-4"
        onClick={handleThemeSwitch}
      >
        <Moon />
      </button>
      <SettingsListItem
        label={t(`bruker.tittelNavn`)}
        value={t(`bruker.navn`)}
        onChange={handleNameChange}
      />
      <SettingsListItem
        label={t(`bruker.passord`)}
        Icon={LockIcon}
        onClick={() => navigate("/password")}
      />

      <SettingsListItem
        enabled={isMobile}
        label={t(`bruker.tittelNavn`)}
        value={t(`bruker.navn`)}
        chevronType="down"
      >
        <div>
          <p>This is the content that appears when the item is expanded.</p>
        </div>
      </SettingsListItem>
      {isMobile ? (
        <SettingsListItem
          enabled={true}
          label={t(`bruker.tittelNavn`)}
          value={t(`bruker.navn`)}
          chevronType="down"
        >
          <div>
            <p>This is the content that appears when the item is expanded.</p>
          </div>
        </SettingsListItem>
      ) : null}
    </div>
  );
};

export default Account;
